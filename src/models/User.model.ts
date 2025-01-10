import { Model, DataTypes, Sequelize } from 'sequelize';
import { IUser, IUserCreation } from './interfaces/IUser.js';

export class User extends Model<IUser, IUserCreation> implements IUser {
  public UserID!: number;
  public Name!: string;
  public Email!: string;
  public Password!: string;
  public Role!: 'Admin' | 'User';
  public CreatedAt!: Date;
  public UpdatedAt!: Date;
}

export function initUserModel(sequelize: Sequelize): typeof User {
  User.init(
    {
      UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      Password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Role: {
        type: DataTypes.ENUM('Admin', 'User'),
        allowNull: false,
        defaultValue: 'User',
      },
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
    },
    {
      sequelize,
      tableName: 'Users',
      timestamps: false, 
    }
  );

  return User;
}
