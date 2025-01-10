import { Model, DataTypes, Sequelize } from 'sequelize';
import { IReturn, IReturnCreation } from './interfaces/IReturn.js';

export class ReturnEntity
  extends Model<IReturn, IReturnCreation>
  implements IReturn
{
  public ReturnID!: number;
  public TransactionID!: number;
  public ReturnQuantity!: number;
  public ReturnTime!: Date;
  public Notes!: string | null;
  public CreatedAt!: Date;
}

export function initReturnModel(sequelize: Sequelize): typeof ReturnEntity {
  ReturnEntity.init(
    {
      ReturnID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TransactionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ReturnQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      ReturnTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
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
    },
    {
      sequelize,
      tableName: 'Returns',
      timestamps: false,
    }
  );

  return ReturnEntity;
}
