'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Encarregado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Encarregado.belongsTo(models.Setor);
      Encarregado.hasMany(models.Funcionario);
    }
  }
  Encarregado.init({
    setorId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Encarregado',
  });
  return Encarregado;
};