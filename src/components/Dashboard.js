 import React from 'react';
 import { Link } from 'react-router-dom';

 const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Select a Game</h1>
            <div ClassName="games">
                <Link to="/roulette">Roulette</Link>
                <Link to="/coinflip">Coinflip</Link>
                <Link to="/crash">Crash</Link>
                <Link to="/upgrade">Upgrade</Link>
                <Link to="/caseopener">Case Opener</Link>
            </div>
        </div>
    );
 };

 export default Dashboard;