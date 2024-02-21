import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return(
        <div className="Background">
            <div className='LoginBox'>
                <div className="Title">CSBETSDOTCOM</div>
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
                    <input
                        type="Password"
                        placeholder='Confirm Password'
                        className='LoginInput'
                    />
                    <Link to="/home"><button className='RegBtn'>Register</button></Link>
                </form>
            </div>
        </div>
    );
};


export default Register;