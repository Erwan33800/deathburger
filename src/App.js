import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from './components/Layout';
import Home from './Home';
import Questions from './Questions';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';

const theme = extendTheme({
  // Personnalise ton thème Chakra UI ici
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<Layout><Home /></Layout>} path="/" />
          <Route element={<Layout><Questions /></Layout>} path="/questions" />
          <Route element={<Layout><AddQuestion /></Layout>} path="/addQuestion" />
          <Route element={<Layout><Leaderboard /></Layout>} path="/leaderboard" />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
