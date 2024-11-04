const { Pedido } = require('../models');

exports.listarPedidos = async (req, res) => {
  const pedidos = await Pedido.findAll();
  if (pedidos.length === 0) return res.sendStatus(204);
  res.status(200).json(pedidos);
};

exports.criarPedido = async (req, res) => {
  const { produtoId, quantidade } = req.body;
  await Pedido.create({ produtoId, quantidade, data: new Date() });
  res.sendStatus(200);
};
