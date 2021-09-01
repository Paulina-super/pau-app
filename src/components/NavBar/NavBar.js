import React from 'react';
import { MenuItems } from "./MenuItems";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import img from '../NavBar/Samuel.png';
import {Link} from 'react-router-dom';




function NavBar (){
    return(
        <div className="NavBar">
            <nav className="NavbarItems">
                <link to='/'><img src={img} alt="Logo Samuel"/> </link>          
                    <ul className='nav-menu active'>
                        {MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link to='/'><a className={MenuItems.cName} href={item.url}>
                                                    {item.title}
                                                </a>
                                    </Link>
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