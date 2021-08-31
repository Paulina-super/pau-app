import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import img from '../Header/Samuel.png';





const Header = ({title, subtitle}) => {
    return (
        <div className='Header'>
            <img src={img} alt="Logo Samuel"/>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
                       
            <NavBar />
            
        </div>
    );
};

export default Header;

