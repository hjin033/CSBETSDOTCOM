// src/pages/Coinflip.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Coinflip.css'; // Make sure this path is correct

function Coinflip() {
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [coinAnimation, setCoinAnimation] = useState('');
  const [Wallet, setWallet] = useState(10000); // Starting Wallet amount
  const [bet, setBet] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  const flipCoin = () => {
    if (bet <= 0 || bet > Wallet) {
      alert('Invalid bet amount.');
      return;
    }

    const isHeads = Math.random() < 0.5;
    setCoinAnimation(isHeads ? 'spin-heads 3s forwards' : 'spin-tails 3s forwards'); // Start the coin animation

    // After the animation, calculate the result
    setTimeout(() => {
      let outcomeMessage;
      if (isHeads) {
        setHeadsCount(headsCount + 1);
        if (selectedOption === 'Heads') {
          setWallet(Wallet + bet * 0.5);
          outcomeMessage = `YOU WIN! You've won ${bet * 0.5} $.`;
        } else {
          setWallet(Wallet - bet);
          outcomeMessage = `YOU LOSE! You've lost ${bet} $.`;
        }
      } else {
        setTailsCount(tailsCount + 1);
        if (selectedOption === 'Tails') {
          setWallet(Wallet + bet * 0.5);
          outcomeMessage = `YOU WIN! You've won ${bet * 0.5} Wallet.`;
        } else {
          setWallet(Wallet - bet);
          outcomeMessage = `YOU LOSE! You've lost ${bet} Wallet.`;
        }
      }
      setCoinAnimation(''); // Reset the animation
      setResultMessage(outcomeMessage);
      setBet('');
      setSelectedOption('');
    }, 3000); // Set this to the duration of your coin animation
  };

  const resetGame = () => {
    setHeadsCount(0);
    setTailsCount(0);
    setCoinAnimation('');
    setResultMessage('');
  };

  const handleBetChange = (e) => {
    const newBet = parseInt(e.target.value, 10);
    if (!isNaN(newBet)) {
      setBet(newBet);
    } else {
      setBet('');
    }
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    setResultMessage(''); // Clear the result message when a new option is selected
  };

  return (
    <div>
      <div className='Background2'></div>
      <Navbar />
      <div className="game-container">
        
        {/* Coin flip container */}
        <div className="coin-container">
          <div className="stats">
            <div id="heads-count">Heads: {headsCount}</div>
            <div id="tails-count">Tails: {tailsCount}</div>
          </div>
          <div className="coin" style={{ animation: coinAnimation }}>
            <img src="coin-heads.png" alt="Heads" className="heads" />
            <img src="coin-tails.png" alt="Tails" className="tails" />
          </div>
          <div className="buttons">
            <button id="flip-button" onClick={flipCoin} disabled={!selectedOption || bet === ''}>Flip Coin</button>
            <button id="reset-button" onClick={resetGame}>Reset</button>
          </div>
        </div>

        {/* Betting container */}
        <div className="betting-container">
          <div className="betting-stats">
            <div>Wallet ($): {Wallet}</div>
          </div>
          <div className="betting-options">
            <button onClick={() => handleOptionSelection('Heads')} disabled={selectedOption === 'Heads'}>Heads</button>
            <button onClick={() => handleOptionSelection('Tails')} disabled={selectedOption === 'Tails'}>Tails</button>
          </div>
          <input
            type="number"
            className="bet-input"
            value={bet}
            onChange={handleBetChange}
            placeholder="Bet amount"
          />
          <div className="result-message">{resultMessage}</div>
        </div>

      </div>
    </div>
  );
}

export default Coinflip;

