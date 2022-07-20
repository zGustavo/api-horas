'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Funcionario.belongsTo(models.Setor);
      Funcionario.belongsTo(models.Encarregado);
      Funcionario.hasMany(models.HorasExtras);
    }
  }
  Funcionario.init({
    setorId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    encarregadoId: DataTypes.INTEGER,
    funcao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Funcionario',
  });
  return Funcionario;
};