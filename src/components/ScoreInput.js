import React, { useState } from 'react';
import { Box, Heading, Input, Button, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ScoreInput = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleScoreChange = (event) => {
    setScore(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name, score);
    setName('');
    setScore('');
  };

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Valide le score !
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            mb={2}
          />
          <Input
            type="number"
            placeholder="Score"
            value={score}
            onChange={handleScoreChange}
            mb={2}
          />
        </Flex>
        
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

ScoreInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ScoreInput;
