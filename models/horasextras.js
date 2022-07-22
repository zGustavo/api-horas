'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HorasExtras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HorasExtras.belongsTo(models.Funcionario);
    }
  }
  HorasExtras.init({
    qtdHoras: DataTypes.FLOAT,
    data: DataTypes.DATE,
    justificativa: DataTypes.STRING,
    funcionarioId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    timestamps: true,
    createdAt: 'data',
    modelName: 'HorasExtras',
  });
  return HorasExtras;
};