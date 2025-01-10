import { User } from '../User.model.js';
import { Transaction } from '../Transaction.model.js';
import { Log } from '../Log.model.js';

export function defineUserAssociations() {
  // 1:N => a User has many Transactions
  User.hasMany(Transaction, {
    foreignKey: 'UserID',
  });

  // 1:N => a User has many Logs
  User.hasMany(Log, {
    foreignKey: 'UserID',
  });
}
