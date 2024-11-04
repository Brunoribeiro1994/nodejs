const { Usuario } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registrarUsuario = async (req, res) => {
  await Usuario.create(req.body);
  res.sendStatus(200);
};

exports.loginUsuario = async (req, res) => {
  const { user, pass } = req.body;
  const usuario = await Usuario.findOne({ where: { user } });
  if (!usuario || !(await bcrypt.compare(pass, usuario.pass))) {
    return res.status(400).send("Invalid credentials");
  }
  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET);
  res.status(200).json({ token });
};
