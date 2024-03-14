import React from 'react';
import Navbar from '../components/Navbar';

const AboutUs = (props) => {
    return (
        <div>
            <div className='Background2'></div>
            <Navbar userState = { props.userState } userFunction = { props.userFunction }/>
            <div style={{
                textAlign: 'center',
                fontSize: '5em'
            }}>Gambling Hotline: 1-800-662-4357</div>
        </div>
    );
};

export default AboutUs;