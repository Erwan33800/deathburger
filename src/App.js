import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, Button } from '@chakra-ui/react';
import Quiz from './components/Quiz';
import ScoreInput from './components/ScoreInput';
import ScoreMenu from './components/ScoreMenu';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [scores, setScores] = useState([]);

  const handleQuizStart = () => {
    // Ici, tu devrais ajouter la logique pour récupérer les 10 questions aléatoires depuis ta base de données
    // Une fois que tu as les questions, mets-les à jour dans le state questions en utilisant setQuestions
  };

  const handleScoreSubmit = (name, score) => {
    // Ici, tu peux ajouter la logique pour sauvegarder le score et le nom du challenger dans ta base de données
    // Une fois que c'est fait, tu peux mettre à jour le state scores en utilisant setScores
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading as="h1" size="xl" mb={4}>
          Random Quiz App
        </Heading>
        <Box mb={4}>
          <Button onClick={handleQuizStart} colorScheme="blue">
            Start Quiz
          </Button>
        </Box>
        <Quiz questions={questions} />
        <ScoreInput onSubmit={handleScoreSubmit} />
        <ScoreMenu scores={scores} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
