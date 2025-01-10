import { Model, DataTypes } from 'sequelize';
export class Log extends Model {
}
export function initLogModel(sequelize) {
    Log.init({
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
    }, {
        sequelize,
        tableName: 'Logs',
        timestamps: false,
    });
    return Log;
}
//# sourceMappingURL=Log.model.js.map