const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');
const auth = require('../middleware/auth');

router.get('/', pedidoController.listarPedidos);
router.post('/', auth, pedidoController.criarPedido);

module.exports = router;
