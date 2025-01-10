import { Item } from '../Item.model.js';
import { Log } from '../Log.model.js';
import { Transaction } from '../Transaction.model.js';
import { TransactionItem } from '../TransactionItem.model.js';
export function defineItemAssociations() {
    // Optional: If each item belongs to a user who “owns” it:
    // Item.belongsTo(User, { foreignKey: 'UserID' }); 
    // (Only if your schema has a UserID in Items table)
    // Many-to-many => Items <-> Transactions through TransactionItem
    Item.belongsToMany(Transaction, {
        through: TransactionItem,
        foreignKey: 'ItemID',
        otherKey: 'TransactionID',
    });
    // 1:N => An item has many Log entries
    Item.hasMany(Log, {
        foreignKey: 'ItemID',
    });
}
//# sourceMappingURL=ItemAssociation.js.map