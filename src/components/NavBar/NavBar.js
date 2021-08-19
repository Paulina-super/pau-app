import React from 'react';
import { MenuItems } from "./MenuItems";
import './NavBar.css';


function NavBar (){
    return(
        <div className="NavBar">
            <nav className="NavbarItems">
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
            </nav>
        </div>

    );
}

export default NavBar