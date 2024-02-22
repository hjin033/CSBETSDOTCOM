import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

function GameCard({ gameName, gameURL }) {
    return (
        <div className='GameCard'>
          <Link to={gameURL}>
            <div className='GameCard2'>
              {gameName}
            </div>
          </Link>
        </div>
      );
}

let Games = [
    {
        'gameName' : 'Case Opener',
        'gameURL' : '/caseopener'
    },
    {
        'gameName' : 'Coin Flip',
        'gameURL' : '/coinflip'
    },
    {
        'gameName' : 'Crash',
        'gameURL' : '/crash'
    },
    {
        'gameName' : 'Roulette',
        'gameURL' : '/roulette'
    },
    {
        'gameName' : 'Upgrade',
        'gameURL' : '/upgrade'
    },
    {
        'gameName' : 'Inventory',
        'gameURL' : '/inventory'
    }
]

const Home = () => {
    return (
        <div className="Background">
            <div className="Header">CSBETSDOTCOM</div>
            <div className="p">The premier destination for Counter Strike gambling.</div>
            <div class="Container">
                {Games.map(game => (
                    <GameCard
                        gameName={game.gameName}
                        gameURL={game.gameURL}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;