// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('deathburger', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
