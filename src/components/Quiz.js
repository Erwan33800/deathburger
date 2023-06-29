import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Question from './Question';

const Quiz = ({ questions }) => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Quiz
      </Heading>
      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </Box>
  );
};

Quiz.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Quiz;
