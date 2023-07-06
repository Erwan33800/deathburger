import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AlertProvider } from './components/AlertContext'; // Importe le contexte d'alerte

import Home from './Home';
import Questions from './Questions';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';


const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <AlertProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/add-question" element={<AddQuestion />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </AlertProvider>
      </Router>
    </ChakraProvider>
  );
};

export default App;
