var express = require('express');
var router = express.Router();
var managerProducts = require('../controllers/managerProducts');
//Fala eliminar un comentario
router.get('/',managerProducts.findAllProducts);

router.post('/addProduct',managerProducts.addProduct);

router.put('/addComment/:Nombre',managerProducts.addComment);

//router,delelte('/delelteComment/:Nombre/:Author');

router.put('/updateQuality/:Nombre',managerProducts.updateQuality);

router.get('/type/:Tipo',managerProducts.findType);

module.exports = router;