const express = require('express');
const mysql = require('mysql');

const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'deathburger',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database:', error);
  } else {
    console.log('Connected to database');
  }
});

app.use(express.json());

// Sélectionner 10 questions au hasard
app.get('/questions', (req, res) => {
  const query = `
    SELECT *
    FROM questions
    ORDER BY nbSelection
    LIMIT 10
  `;
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving questions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Augmenter le "nbSelection" d'une question
app.put('/questions/:id', (req, res) => {
  const { id } = req.params;
  const query = `
    UPDATE questions
    SET nbSelection = nbSelection + 1
    WHERE id = ?
  `;
  connection.query(query, [id], (error) => {
    if (error) {
      console.error('Error updating question:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Question updated successfully' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
