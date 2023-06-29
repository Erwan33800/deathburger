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
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Let's go !!
            </Button>
            <Button 
              rounded={'full'} colorScheme={'blue'} size={'sm'} 
              px={6}>
              Classement
            </Button>
          </Stack>
        </Stack>
      </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
