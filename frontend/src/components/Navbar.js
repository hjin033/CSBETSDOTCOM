import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
    var balance = props.userState.balance;
    return (
        <div className='nav'>
            <Link to="/home" className="mode">Home</Link>
            <Link to="/caseopener" className="mode">Case Opener</Link>
            <Link to="/coinflip" className="mode">Coinflip</Link>
            <Link to="/crash" className="mode">Crash</Link>
            <Link to="/roulette" className="mode">Roulette</Link>
            <Link to="/inventory" className='mode'>Inventory</Link>
            <div className="balanceBox">${balance.toFixed(2)}</div>
        </div>
    );
};

export default Navbar;