import React from 'react'
import ItemList from '../NavBar/ItemList.js';
import '../NavBar/ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className="Container">
            <p>{greeting}</p>
            <ItemList />
            
        </div>
    )
}

export default ItemListContainer
