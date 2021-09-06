import {useEffect, useState} from 'react';
import '../NavBar/ItemListContainer.css';
import '../NavBar/ItemList.js';
const URL ='https://fakestoreapi.com/products';

export const ItemListContainer = () => {
    
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
