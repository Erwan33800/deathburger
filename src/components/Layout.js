import React from 'react';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-b, teal.400, cyan.500)"
    >
      {children}
    </Box>
  );
};

export default Layout;
