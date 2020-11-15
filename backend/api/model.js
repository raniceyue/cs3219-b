
var mongoose = require('mongoose');

// Setup schema
var figureSchema = mongoose.Schema({
	
		name: {
			type: String,
			required: true
		},

		brand: {
			type: String,
			required: true
		},

		price: {
			type: Number,
			required: true
		},
		
		toSell: {
			type: Boolean,
			required: true
		}
});

var Figure = module.exports = mongoose.model('figure', figureSchema);

module.exports.get = function (callback, limit) {
	Figure.find(callback).limit(limit);
}

