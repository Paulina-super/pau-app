import React from 'react';
import Item from '../NavBar/Item.js';


const ItemList = (props) => {

    return (
        <div className="itemlist">
            {
                props.products.map((producto) => {
                    return (
                        <Item producto={producto} key={producto.id}/>
                    )
                })
            }
        </div>
    );
};

export default ItemList;