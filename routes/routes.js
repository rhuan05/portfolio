const express = require('express');
const router = express.Router(); 
const HomeController = require('../controller/HomeController');

router.get('/', HomeController.paginaInicialHome);
router.post('/email_enviado', HomeController.email_enviado);

module.exports = router;