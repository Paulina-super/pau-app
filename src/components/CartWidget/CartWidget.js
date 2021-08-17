import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSolidFaCartShopping } from '@fortawesome/react-fontawesome-svg-core';




const CartWidget = (props) => {
    return (
        <div className='carrito'>
           <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </div>


    );
};


export default CartWidget