var express = require('express');
var router = express.Router();
var managerSales = require('../controllers/managerSales');

router.get('/',managerSales.findAllSales);

router.post('/addSale',managerSales.addSale);

module.exports = router;