var salesModel = require('../model/saleModel');
require('../model/connection');

exports.findAllSales = function(req,res){
	salesModel.find(function(err,sales){
		if(err){
			return res.status(500).send(err.message);
		}
		res.status(200).jsonp(sales);
	});
};

exports.addSale = function(req,res){
	newSale = new salesModel({
		Total: req.body.Total
	});
	newSale.save(function(err,sale){
		if(err){
			return res.status(500).send(err.message);
		}
		res.status(200).jsonp(sale);
	});
};