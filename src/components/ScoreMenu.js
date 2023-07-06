import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ScoreMenu = ({ scores }) => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Score Menu
      </Heading>
      <Box>
        {scores.map((score, index) => (
          <Text key={index} mb={2}>
            {score.name}: {score.score}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

ScoreMenu.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ScoreMenu;