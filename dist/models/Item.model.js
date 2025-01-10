import { Model, DataTypes } from 'sequelize';
export class Item extends Model {
}
export function initItemModel(sequelize) {
    Item.init({
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
    }, {
        sequelize,
        tableName: 'Items',
        timestamps: false,
    });
    return Item;
}
//# sourceMappingURL=Item.model.js.map