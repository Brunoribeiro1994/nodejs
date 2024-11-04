const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');
const auth = require('../middleware/auth');

router.post('/', auth, categoriaController.criarCategoria);

module.exports = router;
