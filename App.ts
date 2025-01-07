require('dotenv').config();

import { Sequelize } from './models';
import express from 'express';
const app = express();

// Middleware
app.use(express.json());

// Routes
// Define your routes here

// Example route
app.get('/', (req, res) => {
  res.send('Inventory Management System API');
});

// Sync Database and Start Server
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync(); // Use { force: true } only during development to reset tables
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log('Error: ' + err));
