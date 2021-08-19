import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar.js';





const Header = ({title, subtitle}) => {
    return (
        <div className='Header'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
                       
            <NavBar />
            
        </div>
    );
};

export default Header;

