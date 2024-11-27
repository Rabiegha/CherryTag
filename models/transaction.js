'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    TransactionID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ItemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Items',
        key: 'ItemID',
      },
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'UserID',
      },
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    QuantityReturned: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    StartTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    EndTime: DataTypes.DATE,
    Status: {
      type: DataTypes.ENUM('Open', 'Partial', 'Closed'),
      allowNull: false,
      defaultValue: 'Open',
    },
    Notes: DataTypes.TEXT,
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false,
    tableName: 'Transactions',
  });

  Transaction.associate = function(models) {
    // A Transaction belongs to an Item
    Transaction.belongsTo(models.Item, { foreignKey: 'ItemID' });
    // A Transaction is initiated by a User
    Transaction.belongsTo(models.User, { foreignKey: 'UserID' });
    // A Transaction has many Returns
    Transaction.hasMany(models.Return, { foreignKey: 'TransactionID' });
    // A Transaction has many Logs
    Transaction.hasMany(models.Log, { foreignKey: 'TransactionID' });
  };

  return Transaction;
};
