module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      preco: DataTypes.FLOAT,
      categoriaId: DataTypes.INTEGER,
    });
    Produto.associate = (models) => {
      Produto.belongsTo(models.Categoria, { foreignKey: "categoriaId", as: "categoria" });
    };
    return Produto;
  };
  