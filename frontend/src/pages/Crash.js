import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './Crash.css'; 
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';// Make sure to run `npm install react-chartjs-2 chart.js` and `run build` before running `npm start`

function Crash() {
  const [betAmount, setBetAmount] = useState('');
  const [multiplier, setMultiplier] = useState(1.0);
  const [gameStarted, setGameStarted] = useState(false);
  const [crashed, setCrashed] = useState(false);
  const [graphData, setGraphData] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [estimatedWinnings, setEstimatedWinnings] = useState(0);

  useEffect(() => {
    let interval;
    if (gameStarted && !crashed) {
      setStartTime(Date.now());
      interval = setInterval(() => {
        setMultiplier((prev) => {
          const randomChance = Math.random();
          if (randomChance < 0.05) {
            clearInterval(interval);
            setCrashed(true);
            setGameStarted(false);
            return prev;
          }
          const newMultiplier = prev + 0.01;
          setGraphData((graphData) => [...graphData, newMultiplier]);
          setEstimatedWinnings((betAmount * newMultiplier).toFixed(2));
          return newMultiplier;
        });
      }, 600);
    } else {
      setGraphData([]);
      setEstimatedWinnings(0);
    }
    return () => clearInterval(interval);
  }, [gameStarted, crashed, betAmount]);

  const startGame = () => {
    if (parseFloat(betAmount) <= 0 || isNaN(parseFloat(betAmount))) {
      alert('Please enter a bet amount greater than 0.');
      return;
    }
    setCrashed(false);
    setMultiplier(1.0);
    setGameStarted(true);
    setGraphData([1.0]); // Initialize graph data
  };

  const cashOut = () => {
    if (!gameStarted || crashed) {
      alert('The game has not started or it has already crashed.');
      return;
    }
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    alert(`You won ${estimatedWinnings} in ${duration} seconds!`);
    setGameStarted(false);
    // Handle cash out logic here, such as updating user's balance
  };

  const resetGame = () => {
    setBetAmount('');
    setMultiplier(1.0);
    setGameStarted(false);
    setCrashed(false);
    setGraphData([]);
    setStartTime(null);
    setEstimatedWinnings(0);
  };

  const data = {
    labels: graphData.map((_, index) => index), // x-axis labels
    datasets: [
      {
        label: 'Multiplier',
        data: graphData,
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green',
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="crash-container">
        <div className="game-panel">
          <Line data={data} />
          {crashed ? (
            <span className="crashed-label">CRASHED!</span>
          ) : (
            <>
              <span className="multiplier">{multiplier.toFixed(2)}x</span>
              <span className="estimated-winnings">Est. Winnings: ${estimatedWinnings}</span>
            </>
          )}
        </div>
        <div className="bet-panel">
          <input
            type="number"
            placeholder="Bet Amount"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
          />
          <button onClick={startGame} disabled={gameStarted}>
            Start
          </button>
          <button onClick={cashOut} disabled={!gameStarted || crashed}>
            Cashout
          </button>
          <button onClick={resetGame}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Crash;
