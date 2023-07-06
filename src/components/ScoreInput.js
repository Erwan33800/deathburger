import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Heading, Input, Button, Flex, Alert, AlertIcon } from '@chakra-ui/react';

const ScoreInput = () => {
  const [pseudo, setPseudo] = useState('');
  const [scoreDB, setScoreDB] = useState('');
  const navigate = useNavigate();

  const handlePseudoChange = (event) => {
    setPseudo(event.target.value);
  };

  const handleScoreChange = (event) => {
    setScoreDB(parseInt(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3010/answers', {
        pseudo: pseudo,
        scoreDB: scoreDB,
      });
      console.log('Score enregistré avec succès:', response.data);

      setPseudo('');
      setScoreDB('');
      navigate('/leaderboard');
    } catch (error) {
      console.log('Une erreur s\'est produite lors de l\'enregistrement du score:', error);
    }
  };

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Valide le score !
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex mt={10}>
          <Input
            type="text"
            placeholder="Pseudo"
            value={pseudo}
            onChange={handlePseudoChange}
            mb={2}
          />
          <Input
            type="number"
            placeholder="Score"
            value={scoreDB}
            onChange={handleScoreChange}
            mb={2}
          />
        </Flex>
        
        <Button colorScheme="blue" type="submit" mt={10}>
          Enregistre le score Beau-Gosse
        </Button>
      </form>
    </Box>
  );
};

export default ScoreInput;
