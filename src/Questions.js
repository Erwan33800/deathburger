import React, { useState } from 'react';
import Quiz from './components/Quiz';
import ScoreInput from './components/ScoreInput';
import ScoreMenu from './components/ScoreMenu';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [scores, setScores] = useState([]);

  const handleScoreSubmit = (name, score) => {
    // Ici, tu peux ajouter la logique pour sauvegarder le score et le nom du challenger dans ta base de données
    // Une fois que c'est fait, tu peux mettre à jour le state scores en utilisant setScores
  };

  return (
    <div>
        <h1>page des questions</h1>
        <Quiz questions={questions} />
        <ScoreInput onSubmit={handleScoreSubmit} />
        <ScoreMenu scores={scores} />
    </div>
    
  );
};

export default Questions;
