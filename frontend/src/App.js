import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Coinflip from './pages/Coinflip';
import Roulette from './pages/Roulette';
import Crash from './pages/Crash';
import CaseOpener from './pages/CaseOpener';
import Register from './pages/Register';
import Inventory from './pages/Inventory';
import AboutUs from './pages/AboutUs';

function App() {
  const [balance, setBalance] = useState(1000);
  const [inventory, setInventory] = useState([]);
  const [name, setName] = useState('');

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
        <Route path="/" element={<Login userState = { userState } userFunction = { userFunction }/>} />
        <Route path="/register" element={<Register userState = { userState } userFunction = { userFunction }/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/coinflip" element={<Coinflip userState = { userState } userFunction = { userFunction }/>} />
        <Route path="/roulette" element={<Roulette userState = { userState } userFunction = { userFunction }/>} />
        <Route path="/crash" element={<Crash userState = { userState } userFunction = { userFunction }/>} />
        <Route path="/caseopener" element={<CaseOpener userState = { userState } userFunction = { userFunction } />} />
        <Route path="/inventory" element={<Inventory userState = { userState } userFunction = { userFunction } />} />
        <Route path="/aboutus" element={<AboutUs userState = { userState } userFunction = { userFunction }/>} />
      </Routes>
    </Router>
  );
}

export default App;
