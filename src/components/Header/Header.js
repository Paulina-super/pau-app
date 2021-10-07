import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import {NavLink} from 'react-router-dom';


const Header = ({title, subtitle}) => {
    return (
        <div className='Header'>
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Catalogo">Catalogo</NavLink>
            <NavLink to="/Us">Us</NavLink>
            <NavLink to="/Contacto">Contacto</NavLink>
                       
            <NavBar />
            
        </div>
    );
};

export default Header;

