// models/Answer.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Answer = sequelize.define(
  'Answer',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scoreDB: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'answers',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
);

module.exports = Answer;
