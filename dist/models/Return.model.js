import { Model, DataTypes } from 'sequelize';
export class ReturnEntity extends Model {
}
export function initReturnModel(sequelize) {
    ReturnEntity.init({
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
    }, {
        sequelize,
        tableName: 'Returns',
        timestamps: false,
    });
    return ReturnEntity;
}
//# sourceMappingURL=Return.model.js.map