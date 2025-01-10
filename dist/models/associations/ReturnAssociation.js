import { ReturnEntity } from '../Return.model.js';
import { Transaction } from '../Transaction.model.js';
export function defineReturnAssociations() {
    // N:1 or 1:1 => Return belongs to Transaction
    ReturnEntity.belongsTo(Transaction, {
        foreignKey: 'TransactionID',
    });
}
//# sourceMappingURL=ReturnAssociation.js.map