import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className="Background">
            <div className='LoginBox'>
                <p className="Title">CSBETSDOTCOM</p>
                <form className="LoginForm">
                    <input
                        type="text"
                        placeholder='Username'
                        className='LoginInput'
                    />
                    <input
                        type="Password"
                        placeholder='Password'
                        className='LoginInput'
                    />
                    <Link to="/home"><button className='LoginBtn'>Login</button></Link>
                </form>
            </div>
        </div>
    );
};


export default Login;