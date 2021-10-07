import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import img from '../NavBar/ST.png';
import {Link} from 'react-router-dom';


function NavBar (){
    return(
        <div className="NavBar">
            <nav className="NavbarItems">
                <img src={img} alt="Logo Federación de Planetas"/>        
                   
                    <Link className="navLinks" to="/">Home</Link>
                    <Link className="navLinks" to="/Catalogo">Catalogo</Link>
                    <Link className="navLinks" to="/Us">Us</Link>
                    <Link className="navLinks" to="/Contacto">Contacto</Link>

                    <CartWidget />
            </nav>
        </div>

    );
}

export default NavBar