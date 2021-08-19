import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartWidget.css';

const CartWidget = (props) => {
    return (
        <div className='carrito'>
           <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </div>


    );
};


export default CartWidget