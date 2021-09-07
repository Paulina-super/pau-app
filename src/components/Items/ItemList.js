import React from 'react';
import { Item } from './components/Items/Item';


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