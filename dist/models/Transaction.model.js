import { Model, DataTypes } from 'sequelize';
export class Transaction extends Model {
}
export function initTransactionModel(sequelize) {
    Transaction.init({
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
    }, {
        sequelize,
        tableName: 'Transactions',
        timestamps: false,
    });
    return Transaction;
}
//# sourceMappingURL=Transaction.model.js.map