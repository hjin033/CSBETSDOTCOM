import React from 'react';
import { Wheel } from 'react-custom-roulette';
import { useState } from 'react';
import './Roulette.css'
import Navbar from '../components/Navbar';

const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '28', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '9', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '26', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '30', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '11', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '7', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '20', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '32', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '17', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '5', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '22', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '34', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '15', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '3', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '24', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '36', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '13', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '1', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '27', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '10', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '25', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '29', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '12', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '8', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '19', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '31', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '18', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '6', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '21', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '33', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '16', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '4', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '23', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '35', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '14', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '2', style: { backgroundColor: 'black', textColor: 'white' } }
]



function Roulette(props) {
  const [game, startGame] = useState(false)
  const [win, setWin] = useState(0)
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [black, setBlack] = useState(0)
  const [color, setColor] = useState('')
  const [result, setResult] = useState('')

  function spinHandleClick () {
    if (color === 'Red') {
      setResult("$" + red + " on red");
      props.userFunction.setBalance(props.userState.balance - red)
    }
    else if (color === 'Green') {
      setResult("$" + green + " on green");
      props.userFunction.setBalance(props.userState.balance - green)
    }
    else if (color === 'Black') {
      setResult("$" + black + " on black");
      props.userFunction.setBalance(props.userState.balance - black)
    }
    startGame(!game);
    rng();
  };

  const redHandleClick = () => {
    if (red > 0) {
      setColor('Red');
    }
  };

  const greenHandleClick = () => {
    if (green > 0) {
      setColor('Green');
    }
  };

  const blackHandleClick = () => {
    if (black > 0) {
      setColor('Black');
    }
  };

  const rng = () => setWin(Math.floor(Math.random() * (data.length - 1)));


  function winner () {
    if (color === 'Green' && (win === 0 || win === 19) ) {
      return true;
    }
    else if (color === 'Red' &&
    (win === 2 || 
      win === 4 ||
      win === 6 ||
      win === 8 ||
      win === 10 ||
      win === 12 ||
      win === 14 ||
      win === 16 ||
      win === 18 ||
      win === 20 ||
      win === 22 ||
      win === 24 ||
      win === 26 ||
      win === 28 ||
      win === 30 ||
      win === 32 ||
      win === 34 ||
      win === 36)){
      return true;
    }
    else if (color === 'Black' && 
    (win === 1 ||
      win === 3 ||
      win === 5 ||
      win === 7 ||
      win === 9 ||
      win === 11 ||
      win === 13 ||
      win === 15 ||
      win === 17 ||
      win === 19 ||
      win === 21 ||
      win === 23 ||
      win === 25 ||
      win === 27 ||
      win === 29 ||
      win === 31 ||
      win === 33 ||
      win === 35 ||
      win === 37 )){
      return true;
    }
    return false;
  };

  function displayResult () {
    
    if (winner()) {
      var winningAmount;
      if (color === 'Green') {
        winningAmount = (green * 18);
        setResult('+$' + winningAmount.toFixed(2));
        props.userFunction.setBalance(props.userState.balance + winningAmount);
        
      }
      else if (color === 'Red') {
        winningAmount = (red * 1.8);
        setResult('+$' + winningAmount.toFixed(2));
        props.userFunction.setBalance(props.userState.balance + winningAmount)
      }
      else if (color === 'Black') {
        winningAmount = (black * 1.8);
        setResult('+$' + winningAmount.toFixed(2));
        props.userFunction.setBalance(props.userState.balance + winningAmount)
      }
    }
    else {
      setResult('You Lost!');
    }
  };

  return (
    <div>
      <div className='Background2'></div>
      <Navbar userState = { props.userState } userFunction = { props.userFunction }/>
      <div className='main'>
        <div className='Rwheel'>
          <Wheel
          mustStartSpinning={game}
          innerRadius={35}
          innerBorderColor='rgb(15, 15, 19)'
          innerBorderWidth={25}
          outerBorderColor='rgb(15, 15, 19)'
          outerBorderWidth={10}
          prizeNumber={win}
          data={data}
          radiusLineWidth={1}
          radiusLineColor='white'
          textDistance={87}
          spinDuration={0.8}
          onStopSpinning={() => {startGame(!game); displayResult()}}
          />
        </div>
        <div className='resultContainer'>{result}</div>
        <div className='spinContainer'>
          <button className='spinBtn' onClick={spinHandleClick} disabled={(game ? true : false) || color === ''}>SPIN</button>
        </div>
        <div className='betContainer'>
          <div className='colorCol'>
            <div className='col'>
              <div className='betAmount'>
                $
                <input className='betInput' type="number" min="1" onChange={(event) => event = setRed(parseFloat(event.target.value).toFixed(2))}/>
              </div>
              <button className= 'redBet' onClick={redHandleClick} disabled={(game ? true : false) || (color === 'Red')}>Red</button>
            </div>
            <div className='col'>
              <div className='betAmount'>
                $
                <input className='betInput' type="number" min="1" onChange={(event) => setGreen(parseFloat(event.target.value).toFixed(2))}/>
              </div>
              <button className= 'greenBet' onClick={greenHandleClick} disabled={(game ? true : false) || (color === 'Green')}>Green</button>
            </div>
            <div className='col'>
              <div className='betAmount'>
                $
                <input className='betInput' type="number" min="1" onChange={(event) => setBlack(parseFloat(event.target.value).toFixed(2))}/>
              </div>
              <button className= 'blackBet' onClick={blackHandleClick} disabled={(game ? true : false) || (color === 'Black')}>Black</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roulette;
