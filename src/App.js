import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Coinflip from './pages/Coinflip'; // Import Coinflip component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coinflip" element={<Coinflip />} /> {/* Add Coinflip route */}
      </Routes>
    </Router>
  );
}

export default App;
