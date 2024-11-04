const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const auth = require('../middleware/auth');

router.get('/', produtoController.listarProdutos);
router.put('/:id', auth, produtoController.atualizarProduto);

module.exports = router;
