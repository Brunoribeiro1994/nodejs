const { Produto, Categoria } = require('../models');

exports.listarProdutos = async (req, res) => {
  const produtos = await Produto.findAll({ include: 'categoria' });
  res.status(200).json(produtos);
};

exports.atualizarProduto = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await Produto.update({ name }, { where: { id } });
  res.sendStatus(200);
};
