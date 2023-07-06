// models/Question.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Question = sequelize.define('question', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  question: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  nbSelection: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Question;
