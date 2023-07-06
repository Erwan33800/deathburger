// controllers/answerController.js

const express = require('express');
const Answer = require('../models/Answer');

const router = express.Router();

// Créer un score et un pseudo pour un joueur
router.post('/', async (req, res) => {
    const { pseudo, scoreDB } = req.body;
    try {
      // Vérifier si le pseudo existe déjà
      const existingAnswer = await Answer.findOne({
        where: { pseudo }
      });
  
      if (existingAnswer) {
        return res.status(400).json({ error: 'Le pseudo existe déjà' });
      }
  
      // Créer une nouvelle entrée
      const answer = await Answer.create({ pseudo, scoreDB });
      res.json(answer);
    } catch (error) {
      console.error('Error creating answer:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Récupérer tous les joueurs avec leur score, triés par meilleur score en premier
router.get('/leaderboard', async (req, res) => {
  try {
    const players = await Answer.findAll({
      attributes: ['pseudo', 'scoreDB'],
      order: [['scoreDB', 'DESC']]
    });
    res.json(players);
  } catch (error) {
    console.error('Error retrieving leaderboard:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
