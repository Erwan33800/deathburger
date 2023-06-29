import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
