import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Heading,
  Button,
  Container,
  Text,
  Stack,
  Link
} from '@chakra-ui/react';

const App = () => {
  const navigate = useNavigate();

  const handleQuizStart = async () => {
    try {
      const response = await axios.get('http://localhost:3010/questions/random');
      const questions = response.data;
      navigate('/questions', { state: { questions } });
    } catch (error) {
      console.log('Une erreur s\'est produite lors de la récupération des questions :', error);
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
          Burger de la Mort <br />
          <Text as={'span'} color={'green.400'}>
            MAZ 2023
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          Bienvenue dans la folie du "Burger de la Mort" ! C'est parti pour un tourbillon de 10 questions où ton cerveau va s'entortiller ! Mais attention, pas de triche, tu dois retenir les réponses jusqu'à la fin. C'est comme manger un burger géant sans perdre le fromage entre les tranches. Prêt à te régaler d'un défi cérébral savoureux ?
        </Text>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
          <Button
            onClick={handleQuizStart}
            colorScheme={'green'}
            bg={'green.400'}
            px={6}
            _hover={{
              bg: 'green.500',
            }}>
            Let's go !!
          </Button>

          <Link href="/leaderboard">
            <Button colorScheme={'blue'} px={6}>
              Classement
            </Button>
          </Link>
          
          <Link href="/addQuestion">
            <Button colorScheme={'red'} px={6}>
              Créer une question
            </Button>          
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default App;
