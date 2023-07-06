import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Link
} from '@chakra-ui/react';

const AddQuestion = () => {
  const navigate = useNavigate();
  const [questionInputs, setQuestionInputs] = useState([{ id: uuid(), question: '' }]);

  const handleQuestionChange = (event, id) => {
    const updatedInputs = questionInputs.map((input) => {
      if (input.id === id) {
        return { ...input, question: event.target.value };
      }
      return input;
    });
    setQuestionInputs(updatedInputs);
  };

  const handleAddInput = () => {
    setQuestionInputs([...questionInputs, { id: uuid(), question: '' }]);
  };

  const handleAddQuestion = async () => {
    const filteredQuestions = questionInputs.filter((input) => input.question.trim() !== '');
    if (filteredQuestions.length === 0) {
      alert('Aucune question valide à ajouter.');
      console.log('Aucune question valide à ajouter.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3010/questions/bulk', {
        questions: filteredQuestions.map((input) => ({ question: input.question })),
      });
      console.log('Questions ajoutées avec succès:', response.data);

      navigate('/');
    } catch (error) {
      console.log('Une erreur s\'est produite lors de l\'ajout des questions:', error);
    }
  };

  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
        <Heading
        color='white'
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Créer une question
        </Heading>
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
        <Box
          rounded={'lg'}
          bg={'white'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {questionInputs.map((input, index) => (
              <FormControl key={input.id} id={`question-${input.id}`}>
                <FormLabel>Question #{index + 1}</FormLabel>
                <Input
                  type="text"
                  value={input.question}
                  onChange={(event) => handleQuestionChange(event, input.id)}
                  placeholder="Entrez votre question"
                />
              </FormControl>
            ))}
            <Button onClick={handleAddInput} colorScheme="blue" size="sm" mt={2}>
              +
            </Button>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              px={6}
              onClick={handleAddQuestion}
              disabled={questionInputs.every((input) => input.question.trim() === '')}>
              Ajouter les questions
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default AddQuestion;