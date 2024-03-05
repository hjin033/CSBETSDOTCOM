import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                props.userFunction.setName(username);
                navigate('/home');
            } 
            
            else {
                const errorData = await response.json();
                console.error('Registration failed:', errorData);
                alert('Registration failed: ' + errorData.message);
            }
        } 
        
        catch (error) {
            console.error('There was an error registering:', error);
            alert('There was an error registering: ' + error); 
        }
    };

    return(
        <div className="Background">
            <div className='LoginBox'>
                <div className="Title">CSBETSDOTCOM</div>
                <form className="LoginForm" onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder='Username'
                        className='LoginInput'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="Password"
                        placeholder='Password'
                        className='LoginInput'
                        alue={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="Password"
                        placeholder='Confirm Password'
                        className='LoginInput'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type='submit' className='RegBtn'>Register</button>
                </form>
            </div>
        </div>
    );
};


export default Register;