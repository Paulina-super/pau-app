import {useEffect, useState} from 'react';
import '../Items/ItemListContainer.css';
import ItemList from './ItemList.js';
import {query, collection, getDocs } from "firebase/firestore";
import dataBase from '../../firebase/firebaseConfig.js';
const URL ='https://fakestoreapi.com/products';

const ItemListContainer = () => {
    useEffect(()=>{
        const getDatos = async()=>{
         const nave= await getDocs(collection(dataBase,'Naves');
    }

    getDatos();
}, []);


    
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
