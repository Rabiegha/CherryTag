import { Transaction } from '../Transaction.model.js';
import { User } from '../User.model.js';
import { ReturnEntity } from '../Return.model.js';
import { Log } from '../Log.model.js';
import { Item } from '../Item.model.js';
import { TransactionItem } from '../TransactionItem.model.js';

export function defineTransactionAssociations() {
  // N:1 => Transaction belongs to User
  Transaction.belongsTo(User, {
    foreignKey: 'UserID',
  });

  // 1:1 or 1:N => Transaction to Return 
  // If you allow multiple returns, use hasMany
  Transaction.hasOne(ReturnEntity, {
    foreignKey: 'TransactionID',
  });

  // 1:N => Transaction has many Logs
  Transaction.hasMany(Log, {
    foreignKey: 'TransactionID',
  });

  // Many-to-many => Transactions <-> Items through TransactionItem
  Transaction.belongsToMany(Item, {
    through: TransactionItem,
    foreignKey: 'TransactionID',
    otherKey: 'ItemID',
  });
}
