var express = require('express');
var router = express.Router();
var managerUser = require('../controllers/managerUser');

router.get('/', managerUser.findAllUsers);

router.post('/addUser', managerUser.addUser);

module.exports = router;