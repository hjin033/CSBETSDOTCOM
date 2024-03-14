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
            <div style={{
                padding: '4rem'
            }}>We are a group of students at the University of California, Riverside all majoring in computer science and adjacent fields.
                Our group wishes to spread awareness about gambling addiction.We found that there is no better way to do this, 
                than to create a fake gambling website. Allowing for fake gambling, users are able to understand the dangers of gambling 
                without any real life consequences. Going into a negative balance allows users to see exactly what will happen when spending 
                copious amounts of money on gambling will do.</div>
            <div style={{
                textAlign: 'center',
                fontSize: '5em'
            }}>PLEASE DO NOT GAMBLE</div>
        </div>
    );
};

export default AboutUs;