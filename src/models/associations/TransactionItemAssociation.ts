import { TransactionItem } from '../TransactionItem.model.js';
import { Transaction } from '../Transaction.model.js';
import { Item } from '../Item.model.js';

export function defineTransactionItemAssociations() {
  // N:1 => TransactionItem belongs to Transaction
  TransactionItem.belongsTo(Transaction, {
    foreignKey: 'TransactionID',
  });

  // N:1 => TransactionItem belongs to Item
  TransactionItem.belongsTo(Item, {
    foreignKey: 'ItemID',
  });
}
