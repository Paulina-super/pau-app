import React from 'react';
import { MenuItems } from "./MenuItems";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import img from '../NavBar/Samuel.png';


function NavBar (){
    return(
        <div className="NavBar">
            <nav className="NavbarItems">
                <img src={img} alt="Logo Samuel"/>        
                    <ul className='nav-menu active'>
                        {MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className={MenuItems.cName} href={item.url}>
                                                    {item.title}
                                                </a>
                                    
                                </li>                            
                            )
                        })}
                    </ul>
                <CartWidget />
            </nav>
        </div>

    );
}

export default NavBar