import { Model, DataTypes, Sequelize } from 'sequelize';
import { ITransaction, ITransactionCreation } from './interfaces/ITransaction.js';

export class Transaction 
  extends Model<ITransaction, ITransactionCreation>
  implements ITransaction
{
  public TransactionID!: number;
  public UserID!: number;
  public Quantity!: number | null;
  public QuantityReturned!: number | null;
  public StartTime!: Date;
  public EndTime!: Date | null;
  public Status!: string;
  public Notes!: string | null;
  public CreatedAt!: Date;
  public UpdatedAt!: Date;
}

export function initTransactionModel(sequelize: Sequelize): typeof Transaction {
  Transaction.init(
    {
      TransactionID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      QuantityReturned: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      StartTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      EndTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Status: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'Pending',
      },
      Notes: {
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
      tableName: 'Transactions',
      timestamps: false,
    }
  );

  return Transaction;
}
