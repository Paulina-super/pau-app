import React, {useState, useEffect} from 'react'
import Item from '../NavBar/Item.js';
import axios from 'axios';

const ItemList = () => {
    const[products,setProducts] = useState([]);
    
    
    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
            .then((res) => setProducts(res.data));
            
    }, []);

    return (
        <div className="ItemList">
            {products.map((product) => {
                return <Item key={products.id} data={product}/>;
            })}
        </div>
    );
};

export default ItemList;