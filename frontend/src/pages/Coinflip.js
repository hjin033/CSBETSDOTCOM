// src/pages/Coinflip.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';


function Coinflip() {
  const [result, setResult] = useState('');
  const [bet, setBet] = useState('');
  const [guess, setGuess] = useState('');
  const [balance, setBalance] = useState(100); // Starting balance for the player

  const handleFlip = () => {
    const flipResult = Math.random() < 0.5 ? 'heads' : 'tails';
    setResult(flipResult);

    if (guess === flipResult) {
      setBalance(balance + parseInt(bet)); // Win: double the bet amount
    } else {
      setBalance(balance - parseInt(bet)); // Lose: subtract the bet amount
    }
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleBetChange = (event) => {
    setBet(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(bet) > 0 && parseInt(bet) <= balance) {
      handleFlip();
    } else {
      alert('Invalid bet amount.'); // Simple validation for bet amount
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Coinflip Game</h2>
      <p>Your balance: ${balance}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Your guess:
            <select value={guess} onChange={handleGuessChange}>
              <option value="">Select heads or tails</option>
              <option value="heads">Heads</option>
              <option value="tails">Tails</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Your bet:
            <input type="number" value={bet} onChange={handleBetChange} />
          </label>
        </div>
        <button type="submit">Flip Coin</button>
      </form>
      {result && (
        <p>
          The coin landed on: {result}. You {guess === result ? 'won' : 'lost'}!
        </p>
      )}
    </div>
  );
}

export default Coinflip;
