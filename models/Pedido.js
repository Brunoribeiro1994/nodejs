module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define("Pedido", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      produtoId: DataTypes.INTEGER,
      quantidade: DataTypes.INTEGER,
      data: DataTypes.DATE,
    });
    return Pedido;
  };
  