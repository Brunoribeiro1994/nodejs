const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    user: DataTypes.STRING,
    pass: DataTypes.STRING,
  });
  Usuario.beforeCreate(async (usuario) => {
    usuario.pass = await bcrypt.hash(usuario.pass, 10);
  });
  return Usuario;
};