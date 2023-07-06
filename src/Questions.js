import React, { useState } from 'react';
import Quiz from './components/Quiz';
import ScoreInput from './components/ScoreInput';
import ScoreMenu from './components/ScoreMenu';
import { Container, Stack, Box, Button, Link } from '@chakra-ui/react';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  

  const handleScoreSubmit = (name, score) => {
    // Ici, tu peux ajouter la logique pour sauvegarder le score et le nom du challenger dans ta base de données
    // Une fois que c'est fait, tu peux mettre à jour le state scores en utilisant setScores
  };

  return (
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
            
            <Link href="/">
                <Button
                colorScheme={'green'}
                bg={'green.400'}
                px={6}
                _hover={{
                    bg: 'green.500',
                }}>
                  Retour au menu
                </Button>
            </Link>
          <Quiz questions={questions} />
          <p>exemple questions</p>
          <ScoreInput onSubmit={handleScoreSubmit} />
        </Stack>
      </Container>
        
    
  );
};

export default Questions;
