import React from 'react'
import ItemList from '../NavBar/ItemList.js';
import ItemCount from '../Contador/ItemCount.js';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p>{greeting}</p>
            <ItemList />
            
        </div>
    )
}

export default ItemListContainer
