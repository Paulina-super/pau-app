import React from 'react';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
const CartWidget = () => {
    return (
        <div className='carrito'>
           <FontAwesomeIcon icon={faCartArrowDown} />
        </div>
    );
};

export default CartWidget