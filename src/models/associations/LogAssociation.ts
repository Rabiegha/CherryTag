import { Log } from '../Log.model.js';
import { User } from '../User.model.js';
import { Transaction } from '../Transaction.model.js';
import { Item } from '../Item.model.js';

export function defineLogAssociations() {
  // N:1 => Log belongs to User
  Log.belongsTo(User, {
    foreignKey: 'UserID',
  });

  // N:1 => Log belongs to Transaction
  Log.belongsTo(Transaction, {
    foreignKey: 'TransactionID',
  });

  // N:1 => Log belongs to Item
  Log.belongsTo(Item, {
    foreignKey: 'ItemID',
  });
}
