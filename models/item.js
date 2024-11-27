'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    ItemID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Model: DataTypes.STRING,
    SerialNumber: {
      type: DataTypes.STRING,
      unique: true,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    AvailableQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    PurchaseDate: DataTypes.DATE,
    State: DataTypes.STRING,
    Location: DataTypes.STRING,
    QRCode: {
      type: DataTypes.STRING,
      unique: true,
    },
    Description: DataTypes.TEXT,
  }, {
    timestamps: true,
    createdAt: 'CreatedAt',
    updatedAt: 'UpdatedAt',
  });

  Item.associate = function(models) {
    Item.hasMany(models.Transaction, { foreignKey: 'ItemID' });
    Item.hasMany(models.Log, { foreignKey: 'ItemID' });
  };

  return Item;
};
