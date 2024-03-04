import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Coinflip from './pages/Coinflip';
import Roulette from './pages/Roulette';
import Crash from './pages/Crash';
import Upgrade from './pages/Upgrade';
import CaseOpener from './pages/CaseOpener';
import Register from './pages/Register';
import Inventory from './pages/Inventory';

function App() {
  const [balance, setBalance] = useState(1000);
  const [inventory, setInventory] = useState([]);
  const [name, setName] = useState('Timmy');

  let userState = {
    balance: balance,
    inventory: inventory,
    name: name
  }

  let userFunction = {
    setBalance: setBalance,
    addToInventory: (item) => setInventory((prevInventory) => [...prevInventory, item]),
    removeFromInventory: (index) => setInventory((prevInventory) => prevInventory.filter((_, i) => i !== index)),
    setInventory: setInventory, // Directly set inventory if needed
    setName: setName
  }

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
        <Route path="/caseopener" element={<CaseOpener userState = { userState } userFunction = { userFunction } />} />
        <Route path="/inventory" element={<Inventory userState = { userState } userFunction = { userFunction } />} />
      </Routes>
    </Router>
  );
}

export default App;
