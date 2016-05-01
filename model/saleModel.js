var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var salesSchema = {
	Total: {type: Number, required: true}
}

var salesModel = mongoose.model('registro',salesSchema);

module.exports = salesModel;