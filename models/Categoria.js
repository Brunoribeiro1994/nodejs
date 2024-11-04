module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define("Categoria", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    });
    return Categoria;
  };
  