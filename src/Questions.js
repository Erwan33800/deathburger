import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScoreInput from './components/ScoreInput';
import { Container, Stack, Box, Button, Link, Heading } from '@chakra-ui/react';
import Question from './components/Question';

const Questions = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const { state } = location;
    if (state && state.questions) {
      setQuestions(state.questions);
    }
  }, [location]);

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
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Voici les 10 questions !
          </Heading>
          {questions.map((question, index) => (
            <Question key={index} question={question.question} />
          ))}
        </Box>
        <ScoreInput />
      </Stack>
    </Container>
  );
};

export default Questions;
