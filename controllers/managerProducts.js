var productsModel = require('../model/productModel');
var db = require('../model/connection');


exports.findAllProducts = function(req,res){
	productsModel.find(function(err,products){
		if(err){
			return res.status(500).send(err.message);
		}
		res.status(200).jsonp(products);
	});
};

exports.addProduct = function(req,res){
	newProduct = new productsModel({
		Nombre: req.body.Nombre,
		Precio: req.body.Precio,
		Cantidad: req.body.Cantidad,
		Like: req.body.Like,
		Dislike: req.body.Dislike,
		Tipo: req.body.Tipo,
		Imagen: req.body.Imagen
	});
	newProduct.save(function(err,product){
		if(err){
			return res.status(500).send(err);
		}
		res.status(200).jsonp(product);
	});
};

exports.addComment = function(req,res){
	productsModel.findOne({Nombre: req.params.Nombre},function(err,product){
		product.review.push({
			Start: req.body.Start,
			Body: req.body.Body,
			Author: req.body.Author
		});
		product.save(function(err) {
			if(err){
				return res.status(500).send(err.message);
			}
			res.status(200).jsonp(product);
		});
	});
};

exports.updateQuality = function(req,res){
	productsModel.findOne({Nombre: req.params.Nombre},function(err,product){
		product.Like = req.body.Like;
		product.Dislike = req.body.Dislike;
		product.save(function(err){
			if (err) {
				return res.status(500).send(err.message);
			}
			res.status(200).jsonp(product);
		});
	});
};

exports.findType = function(req,res){
	productsModel.find({Tipo:req.params.Tipo},function(err,products){
		if(err){
			return res.status(500).send(err.message);
		}
		res.status(200).jsonp(products);
	});
};