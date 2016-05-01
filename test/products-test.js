var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var assert = require('assert');

chai.use(chaiHttp);

describe('products-test',function(){
	it('Deberia obtener estado 200 GET /products');
	it('Deberia obtener un array GET /products');
	it('Deberia guardar un producto y obtener estado 200 POST');
	it('Deberia guardar un comentario y obtener estado 200 PUT');
});


it('Deberia obtener estado 200 GET /products',function(done){
	chai.request(server).get('/products').end(function(err,res){
		res.should.have.status(200);
		done();
	});
});

it('Deberia obtener un array GET /products',function(done){
	chai.request(server).get('/products').end(function(err,res){
		res.body.should.be.a('array');
		done();
	});
});

it('Deberia guardar un producto y obtener estado 200 POST',function(done){
	chai.request(server).post('/products/addProduct').send(
	{
		"Nombre":"Zapatos",
		"Precio": 1022533,
		"Cantidad": 13,
		"Like": 0,
		"Dislike": 0,
		"Tipo": 5,
		"Imagen": "asfasfafaas",
		"review": []
	}
	).end(function(err,res){
		res.should.have.status(200);
		done();
	});
});

it('Deberia guardar un comentario y obtener estado 200 PUT',function(done){
	chai.request(server).put('/products/addComment/Zapatos').send(
	{
		"Start": 5,
		"Body": "fasfsf",
		"Author": "ndgdgsg" 
	}).end(function(err,res){
		res.should.have.status(200);
		done();
	});
});

/*it('Deberia eliminar un comentario y obtener estado 200 DELETE',function(done){
	chai.request(server).delete('/products/removeComment/Zapatos/ndgdgsg').end(function(err,res){
		res.should.have.status(200);
	});
});*/