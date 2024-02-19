import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <Link to="/roulette" className="mode">Roulette</Link>
            <Link to="/coinflip" className="mode">Coinflip</Link>
            <Link to="/crash" className="mode">Crash</Link>
            <Link to="/upgrade" className="mode">Upgrade</Link>
            <Link to="/caseopener" className="mode">Case Opener</Link>
            <Link to="/inventory" className='mode'>Inventory</Link>
        </div>
    );
};

export default Navbar;