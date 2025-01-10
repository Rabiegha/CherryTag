/**
 * app.ts
 */
require('dotenv').config();
import express from 'express';
import db from './models/index.js';
const app = express();
// Middleware
app.use(express.json());
// 5) Define routes
// Example base route
app.get('/', (req, res) => {
    res.send('Inventory Management System API');
});
// 6) Retrieve port from environment variables or fallback to 3000
const PORT = process.env.PORT || 3000;
// 7) Connect to DB and start the server
//    - db.sequelize.authenticate() verifies the DB connection
//    - db.sequelize.sync() ensures the tables are created (or matched)
db.sequelize.authenticate()
    .then(() => {
    console.log('Database connected...');
    // During development, you might do { force: true } or { alter: true }
    // but *not* in production.
    return db.sequelize.sync();
})
    .then(() => {
    // Finally, start the Express server
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
    .catch((err) => {
    console.error('Error:', err);
});
export default app;
//# sourceMappingURL=App.js.map