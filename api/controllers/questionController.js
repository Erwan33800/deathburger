// controllers/questionController.js

const express = require('express');
const Question = require('../models/Question');
const sequelize = require('../config/database');
const { Op } = require('sequelize');
const router = express.Router();

// Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (error) {
    console.error('Error retrieving questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get 10 random questions
router.get('/random', async (req, res) => {
  try {
    const questions = await Question.findAll({
      order: [
        ['nbSelection', 'ASC'], // Trie par ordre croissant de nbSelection
        [sequelize.random()] // Mélange aléatoire
      ],
      limit: 10
    });
    res.json(questions);
  } catch (error) {
    console.error('Error retrieving random questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Create a question
router.post('/', async (req, res) => {
  const { question } = req.body;
  try {
    const createdQuestion = await Question.create({ question });
    res.json(createdQuestion);
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create multiple questions
router.post('/bulk', async (req, res) => {
  const { questions } = req.body;
  try {
    const createdQuestions = await Question.bulkCreate(questions);
    res.json(createdQuestions);
  } catch (error) {
    console.error('Error creating questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update nbSelection for multiple questions
router.put('/update', async (req, res) => {
  const { questionIds } = req.body;
  try {
    // Update nbSelection for the specified questionIds
    const [updatedCount, updatedQuestions] = await Question.update(
      { nbSelection: sequelize.literal('nbSelection + 1') },
      { where: { id: { [Op.in]: questionIds } }, returning: true }
    );
    console.log(updatedQuestions); // Vérifie les enregistrements mis à jour

    res.json({ message: `${updatedCount} questions updated successfully` });
  } catch (error) {
    console.error('Error updating questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
