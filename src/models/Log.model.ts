import { Model, DataTypes, Sequelize } from 'sequelize';
import { ILog, ILogCreation } from './interfaces/ILog.js';

export class Log extends Model<ILog, ILogCreation> implements ILog {
  public LogID!: number;
  public TransactionID!: number | null;
  public ItemID!: number | null;
  public UserID!: number;
  public Action!: string;
  public ActionTime!: Date;
  public Details!: string | null;
  public CreatedAt!: Date;
}

export function initLogModel(sequelize: Sequelize): typeof Log {
  Log.init(
    {
      LogID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TransactionID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ItemID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Action: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      ActionTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      Details: {
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
      tableName: 'Logs',
      timestamps: false,
    }
  );

  return Log;
}
