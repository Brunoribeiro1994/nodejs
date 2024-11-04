const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/new_user', usuarioController.registrarUsuario);
router.post('/login', usuarioController.loginUsuario);

module.exports = router;
