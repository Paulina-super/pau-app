import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import CartWidget from '../CartWidget/CartWidget.js';
import 

const Header = () => {
    return (
        <div className='Header'>
            <h1 className="navbar-logo">Samuel<i className="fas fa-cat"></i></h1>
            

            <NavBar />
            <CartWidget />
        </div>
    );
};

export default Header;

