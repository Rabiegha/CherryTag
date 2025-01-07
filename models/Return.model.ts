'use strict';
module.exports = (sequelize, DataTypes) => {
  const Return = sequelize.define('Return', {
    ReturnID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TransactionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Transactions',
        key: 'TransactionID',
      },
    },
    ReturnQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ReturnTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    Notes: DataTypes.TEXT,
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false,
    tableName: 'Returns',
  });

  Return.associate = function(models) {
    // A Return belongs to a Transaction
    Return.belongsTo(models.Transaction, { foreignKey: 'TransactionID' });
  };

  return Return;
};
