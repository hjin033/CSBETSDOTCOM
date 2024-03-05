import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({ username, password }),   
            });

            if (response.ok) {
                navigate('/home');
            }

            else {
                const error = await response.json();
                console.error('Login failed', error.error);
            }
        }

        catch (error) {
            console.error('There was an error', error);
        }
    };

    return(
        <div className="Background">
            <div className='LoginBox'>
                <div className="Title">CSBETSDOTCOM</div>
                <form className="LoginForm" onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder='Username'
                        className='LoginInput'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        className='LoginInput'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className='LoginBtn'>Login</button>
                </form>
                <a href="/register" className='RegLink'>create an account</a>
            </div>
        </div>
    );
};


export default Login;