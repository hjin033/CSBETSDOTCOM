import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Dashboard from "../components/Dashboard";

const Home = () => {
    return (
        // <div className="flex flex-col justify-center items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="Background">
            <header className="mb-8 mt-0 md:mt-12 w-full text-center">
                <h1 className="text-5x1 font-bold mb-4">Welcome to CSBETSDOTCOM</h1>
                <p className="text-x1">The premier destination for Counter Strike gambling.</p>
            </header>
            <Dashboard />
        </div>
    );
};

export default Home;