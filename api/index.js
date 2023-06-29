const express = require('express');
const connection = require('./db/connection');
const questionController = require('./controllers/questionController');

const app = express();

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database:', error);
  } else {
    console.log('Connected to database');
  }
});

app.use(express.json());

app.use('/questions', questionController);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
