import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Box, 
  Heading, 
  Button,
  Container,
  Text,  
  Stack,
  Icon,
  useColorModeValue,
  createIcon, 
} from '@chakra-ui/react';
import Quiz from './components/Quiz';
import ScoreInput from './components/ScoreInput';
import ScoreMenu from './components/ScoreMenu';

const App = () => {

  return (
    <div>
        <h1>page des questions</h1>
        <Quiz questions={questions} />
        <ScoreInput onSubmit={handleScoreSubmit} />
        <ScoreMenu scores={scores} />
    </div>
    
  );
};

export default App;
