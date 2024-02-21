 import React from 'react';
 import { Link } from 'react-router-dom';

 const Dashboard = () => {
    return (
        <div className="text-center w-full">
            <div ClassName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <Link to="/roulette" className="game-card">Roulette</Link>
                <Link to="/coinflip" className="game-card">Coinflip</Link>
                <Link to="/crash" className="game-card">Crash</Link>
                <Link to="/upgrade" className="game-card">Upgrade</Link>
                <Link to="/caseopener" className="game-card">Case Opener</Link>
            </div>
        </div>
    );
 };

 export default Dashboard;