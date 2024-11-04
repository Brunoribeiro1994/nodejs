const express = require('express');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const { sequelize } = require('./models');

app.use(express.json());

app.use('/nodeJS/produtos', produtoRoutes);
app.use('/nodeJS/categoria', categoriaRoutes);
app.use('/nodeJS/pedidos', pedidoRoutes);
app.use('/nodeJS/usuarios', usuarioRoutes);

sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log('API TechStore rodando em http://localhost:8000');
  });
});
