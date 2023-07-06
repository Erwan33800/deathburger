import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Question = ({ question }) => {
  return (
    <Box bg="gray.200" p={4} mb={4}>
      <Text fontSize="lg">{question}</Text>
      <Text fontSize="lg">exmeple questisfdgsdfgdsgdsgon</Text>
    </Box>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Question;
