import React from 'react'
import ItemList from './NavBar/ItemList';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p>{greeting}</p>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
