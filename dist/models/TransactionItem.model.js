import { Model, DataTypes } from 'sequelize';
export class TransactionItem extends Model {
}
export function initTransactionItemModel(sequelize) {
    TransactionItem.init({
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
    }, {
        sequelize,
        tableName: 'TransactionItems',
        timestamps: false,
    });
    return TransactionItem;
}
//# sourceMappingURL=TransactionItem.model.js.map