import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Coinflip from './pages/Coinflip';
import Roulette from './pages/Roulette';
import Crash from './pages/Crash';
import Upgrade from './pages/Upgrade';
import CaseOpener from './pages/CaseOpener';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coinflip" element={<Coinflip />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/crash" element={<Crash />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/caseopener" element={<CaseOpener />} />
      </Routes>
    </Router>
  );
}

export default App;
