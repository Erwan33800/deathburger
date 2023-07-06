import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';
import AddQuestion from './AddQuestion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/addQuestion" element={<AddQuestion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
