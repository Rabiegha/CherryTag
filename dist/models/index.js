import { Sequelize } from 'sequelize';
// Import model classes + init functions
import { User, initUserModel } from './User.model.js';
import { Item, initItemModel } from './Item.model.js';
import { Transaction, initTransactionModel } from './Transaction.model.js';
import { TransactionItem, initTransactionItemModel } from './TransactionItem.model.js';
import { ReturnEntity, initReturnModel } from './Return.model.js';
import { Log, initLogModel } from './Log.model.js';
// Import association definition functions
import { defineUserAssociations } from './associations/UserAssociations.js';
import { defineItemAssociations } from './associations/ItemAssociation.js';
import { defineTransactionAssociations } from './associations/TransactionAssociation.js';
import { defineTransactionItemAssociations } from './associations/TransactionItemAssociation.js';
import { defineReturnAssociations } from './associations/ReturnAssociation.js';
import { defineLogAssociations } from './associations/LogAssociation.js';
// Create Sequelize instance (configure DB credentials, dialect, etc.)
const sequelize = new Sequelize('your_database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false, // uncomment to suppress logging
});
// 1) Initialize all models
initUserModel(sequelize);
initItemModel(sequelize);
initTransactionModel(sequelize);
initTransactionItemModel(sequelize);
initReturnModel(sequelize);
initLogModel(sequelize);
// 2) Define associations
defineUserAssociations();
defineItemAssociations();
defineTransactionAssociations();
defineTransactionItemAssociations();
defineReturnAssociations();
defineLogAssociations();
// 3) Collect them into an object
const db = {
    sequelize,
    User,
    Item,
    Transaction,
    TransactionItem,
    ReturnEntity,
    Log,
};
// 4) Optionally sync DB in dev/test
// await db.sequelize.sync({ force: false });
export default db;
//# sourceMappingURL=index.js.map