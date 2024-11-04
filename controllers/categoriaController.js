const { Categoria } = require('../models');

exports.criarCategoria = async (req, res) => {
  await Categoria.create(req.body);
  res.sendStatus(200);
};
