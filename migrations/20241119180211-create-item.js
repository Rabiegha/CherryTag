'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Brand: {
        type: Sequelize.STRING
      },
      Model: {
        type: Sequelize.STRING
      },
      SerialNumber: {
        type: Sequelize.STRING
      },
      Quantity: {
        type: Sequelize.INTEGER
      },
      AvailableQuantity: {
        type: Sequelize.INTEGER
      },
      PurchaseDate: {
        type: Sequelize.DATE
      },
      Price: {
        type: Sequelize.DECIMAL
      },
      State: {
        type: Sequelize.STRING
      },
      Location: {
        type: Sequelize.STRING
      },
      QRCode: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Items');
  }
};