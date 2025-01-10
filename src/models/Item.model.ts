import { Model, DataTypes, Sequelize } from 'sequelize';
import { IItem, IItemCreation } from './interfaces/IItem.js';

export class Item extends Model<IItem, IItemCreation> implements IItem {
  public ItemID!: number;
  public Name!: string;
  public Quantity!: number;
  public PurchaseDate!: Date | null;
  public State!: string;
  public QRCode!: string;
  public Description!: string | null;
  public CreatedAt!: Date;
  public UpdatedAt!: Date;
}

export function initItemModel(sequelize: Sequelize): typeof Item {
  Item.init(
    {
      ItemID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      PurchaseDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      State: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'Available',
      },
      QRCode: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      CreatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      UpdatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Items',
      timestamps: false,
    }
  );

  return Item;
}
