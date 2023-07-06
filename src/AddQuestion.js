import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
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
} from '@chakra-ui/react';
import axios from 'axios';

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
    try {
      const questions = questionInputs.map((input) => ({ question: input.question }));
      const response = await axios.post('http://localhost:3010/questions/bulk', {
        questions,
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
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Créer une question
        </Heading>
        <Text color={'gray.500'}>Ajoute une nouvelle question à la liste.</Text>
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
              disabled={questionInputs.some((input) => !input.question)}>
              Ajouter les questions
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default AddQuestion;
