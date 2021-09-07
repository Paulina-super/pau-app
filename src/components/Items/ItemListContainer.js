import {useEffect, useState} from 'react';
import '../Items/ItemListContainer.css';
import ItemList from './ItemList.js';
const URL ='https://fakestoreapi.com/products';

const ItemListContainer = () => {
    
    const [products,setProducts]= useState([]);
    
    
    useEffect(()=>{
        fetch(URL)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setProducts(data)
            })
    }, []);

    return (
        <div className="Container">
            <ItemList products={products}/>
        </div>
    )
};

export default ItemListContainer;
