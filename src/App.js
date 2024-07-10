import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import SocialMedia from './SocialMedia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/social-media" element={<SocialMedia />} />
      </Routes>
    </Router>
  );
}

export default App;
