
let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Workingg',
        message: 'THE API IS WORKING'
    });
});

var controller = require('./controller');

router.route('/figures')
    .get(controller.index)
    .post(controller.new);

router.route('/figures/:id')
    .get(controller.view)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;
