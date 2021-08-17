import React from 'react';
import { MenuItems } from "./MenuItems";
import './NavBar.css';
import '.src/components/CartWidget/CartWidget.js';

class NavBar extends React.Component {
 state={clicked: false}

 handleClick=()=>{
     this.setState({ clicked: !this.state.clecked })
 }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Samuel<i className="fas fa-cat"></i></h1>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                    
                </div>
                <ul className={this.state.clicked ?'nav-menu active':'nav-menu'}>
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
        )
    }
}

export default NavBar