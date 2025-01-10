import { Model, DataTypes, Sequelize } from 'sequelize';
import { ITransactionItem, ITransactionItemCreation } from './interfaces/ITransactionItem.js';

export class TransactionItem
  extends Model<ITransactionItem, ITransactionItemCreation>
  implements ITransactionItem
{
  public TransactionItemID!: number;
  public TransactionID!: number;
  public ItemID!: number;
  public Quantity!: number;
  public CreatedAt!: Date;
  public UpdatedAt!: Date;
}

export function initTransactionItemModel(sequelize: Sequelize): typeof TransactionItem {
  TransactionItem.init(
    {
      TransactionItemID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TransactionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ItemID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      CreatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      UpdatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      tableName: 'TransactionItems',
      timestamps: false,
    }
  );

  return TransactionItem;
}
