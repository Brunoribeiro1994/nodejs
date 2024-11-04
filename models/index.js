const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Produto = require('./Produto')(sequelize, Sequelize.DataTypes);
const Categoria = require('./Categoria')(sequelize, Sequelize.DataTypes);
const Pedido = require('./Pedido')(sequelize, Sequelize.DataTypes);
const Usuario = require('./Usuario')(sequelize, Sequelize.DataTypes);

Produto.associate({ Categoria });
Pedido.associate({ Produto });

module.exports = { sequelize, Produto, Categoria, Pedido, Usuario };
