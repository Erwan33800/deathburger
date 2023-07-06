import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Stack, Box, Heading, Text, Link, Button } from '@chakra-ui/react';

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get('http://localhost:3010/answers/leaderboard');
      setPlayers(response.data);
    } catch (error) {
      console.log('Une erreur s\'est produite lors de la récupération du classement:', error);
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
          Classement des Joueurs
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
        <Box>
          {players.map((player, index) => (
            <Box key={index} bg="gray.200" p={4} my={2} borderRadius="md">
              <Text fontWeight="bold">{index + 1}. {player.pseudo}</Text>
              <Text>{player.scoreDB} points</Text>
            </Box>
          ))}
        </Box>
      </Stack>
    </Container>
  );
};

export default Leaderboard;
