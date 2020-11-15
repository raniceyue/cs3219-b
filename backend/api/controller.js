var Figure = require('./model');

/**
 * Create new figure
 */

exports.new = async function (req, res) {
    try {
        var figure = new Figure();
        figure.name = req.body.name;
        figure.brand = req.body.brand;
        figure.price = req.body.price;
        figure.toSell = req.body.toSell;
        
        await figure.save()
        res.status(200).json({
            message: 'New figure added',
            data: figure
        });
            
    } catch (e) {
        res.status(405).json({
            message: 'An error has occurred when making the POST request to add a figure! Did you forget to include a field in the request?',
            error: e.errors
        });
    }
};

/**
 * Get all figures
 */
exports.index = async function (req, res) {
    try {
        Figure.get((err, figures) => {
            if (err) {
                res.json({
                    status: "An error has occurred and I was unable to retrieve your figure collection!",
                    message: err,
                });
            } else {
                res.status(200).send(figures);
            }
        });
    } catch (e) {
        res.json({
            status: "An error has occurred and I was unable to retrieve your figure collection!",
            message: err,
        });
    }
};


/**
 * Get a particular figure
 */
exports.view = async function (req, res) {
    try {
        let figure = await Figure.findById(req.params.id);
        res.status(200).send({
            message: "Successfully retrieved your figure!",
            data: figure
        })
    } catch (e) {
        res.status(404).send({
            message: "An error has occurred and I was unable to retrieve the figure! Are you sure you entered the correct :id in the URL?",
            error: e,
        });
    }
};

// Handle update figure info
exports.update = async function (req, res) {
    try {
        // If no fields provided for update send error response
        if (req.body.name === undefined && req.body.brand === undefined &&
            req.body.price === undefined && req.body.toSell === undefined) {
            res.status(405).send({
                message: "You did not provide any valid fields to update! Please provide at least 1 valid field..."
            })
        } else {
            let figure = await Figure.findOne({ _id: req.params.id })
            
            figure.name = req.body.name ? req.body.name : figure.name;
            figure.brand = req.body.brand ? req.body.brand : figure.brand;
            figure.price = req.body.price ? req.body.price : figure.price;
            figure.toSell = req.body.toSell ? req.body.toSell : figure.toSell;
            
            await Figure.updateOne({ _id: req.params.id }, figure);
                   
            res.status(200).json({
                message: 'Figure Info updated',
                data: figure
            });
        }
    } catch (e) {
        res.status(404).send({
            message: "An error has occurred and I was unable to update the figure! Are you sure you provided the correct :id for the figure you want to update?",
            error: e,
        });
    }
};

exports.delete = async function (req, res) {
    try {
        await Figure.deleteOne({ _id: req.params.id }) 
        res.status(200).json({
                message: 'Figure deleted'
        });
    } catch (e) {
        res.status(404).send({
            message: "An error has occurred and I was unable to delete the figure!",
            error: e,
        });
    }    
};

