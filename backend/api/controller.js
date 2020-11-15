var Figure = require('./model');

/**
 * Create new figure
 */

exports.new = function (req, res) {
    var figure = new Figure();
	figure.name = req.body.name ? req.body.name : figure.name;
	figure.brand = req.body.brand;
	figure.price = req.body.price;
	figure.toSell = req.body.toSell;
	
	figure.save(function (err) {
		if (err) {
			res.json(err);
        }
        res.status(200).json({
            message: 'New figure added',
            data: figure
        });
	});
};

/**
 * Get all figures
 */
exports.index = function (req, res) {
	Figure.get(function (err, figures) {
			if (err) {
                res.json({
                        status: "error",
                        message: err,
                });
            }
            res.status(200).send(figures);
	});
};


/**
 * Get a particular figure
 */
exports.view = function (req, res) {
    Figure.findById(req.params.id, function (err, figure) {
        if (err)
            res.send(err);
        res.status(200).json({
            message: 'Figure details loading..',
            data: figure
        });
    });
};

// Handle update figure info
exports.update = function (req, res) {
    Figure.findOne({ _id: req.params.id }, function (err, figure) {
        if (err)
            res.send(err);

		figure.name = req.body.name ? req.body.name : figure.name;
        figure.brand = req.body.brand ? req.body.brand : figure.brand;
        figure.price = req.body.price ? req.body.price : figure.price;
        figure.toSell = req.body.toSell ? req.body.toSell : figure.toSell;

		// save the figure and check for errors
        Figure.updateOne({ _id: req.params.id }, figure, (err) => {
            if (err)
                res.json(err);
            res.status(200).json({
                message: 'Figure Info updated',
                data: figure
            });
        });
    });
};

exports.delete = function (req, res) {
    Figure.deleteOne({
        _id: req.params.id
    }, function (err, figure) {
        if (err)
            res.send(err);
        res.status(200).json({
                message: 'Figure deleted'
            });
        }
    );
};

