'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HorasExtras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qtdHoras: {
        type: Sequelize.FLOAT
      },
      data: {
        type: Sequelize.DATE
      },
      justificativa: {
        type: Sequelize.STRING
      },
      funcionarioId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HorasExtras');
  }
};