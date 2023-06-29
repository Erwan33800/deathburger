// models/Question.js

const connection = require('../db/connection');

class Question {
  static getRandomQuestions(limit) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT *
        FROM questions
        ORDER BY nbSelection
        LIMIT ?
      `;
      connection.query(query, [limit], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  static incrementSelectionCount(questionId) {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE questions
        SET nbSelection = nbSelection + 1
        WHERE id = ?
      `;
      connection.query(query, [questionId], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = Question;
