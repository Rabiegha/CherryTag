'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    LogID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TransactionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Transactions',
        key: 'TransactionID',
      },
    },
    ItemID: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    Action: {
      type: DataTypes.ENUM('Borrow', 'Return', 'Update', 'Create', 'Delete', 'Cancel'),
      allowNull: false,
    },
    ActionTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    Details: DataTypes.TEXT,
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false,
    tableName: 'Logs',
  });

  Log.associate = function(models) {
    // A Log is performed by a User
    Log.belongsTo(models.User, { foreignKey: 'UserID' });
    // A Log may reference a Transaction
    Log.belongsTo(models.Transaction, { foreignKey: 'TransactionID' });
    // A Log may reference an Item
    Log.belongsTo(models.Item, { foreignKey: 'ItemID' });
  };

  return Log;
};
