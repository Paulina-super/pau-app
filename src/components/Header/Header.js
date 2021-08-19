import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import CartWidget from '../CartWidget/CartWidget.js';




const Header = ({title, subtitle}) => {
    return (
        <div className='Header'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
                       
            <NavBar />
            <CartWidget />
        </div>
    );
};

export default Header;

