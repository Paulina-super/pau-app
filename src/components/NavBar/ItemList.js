import React, {useState, useEffect} from 'react'
import Item from '../NavBar/Item.js';


const ItemList = (props) => {

    return (
        <div className="ItemList">
            {props.products.map((producto) => {
                return <Item key={products.id} data={producto}/>;
                })
            }
        </div>
    );
};

export default ItemList;