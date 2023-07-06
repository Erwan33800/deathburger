const express = require('express');
const sequelize = require('./config/database');
const questionController = require('./controllers/questionController');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

app.use(express.json());

app.use('/questions', questionController);

app.listen(3010, () => {
  console.log('Server is running on port 3010');
});
