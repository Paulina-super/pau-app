import {useEffect, useState} from 'react';
import '../Items/ItemListContainer.css';
import ItemList from './ItemList.js';
import {query, collection, getDocs } from "firebase/firestore";
import dataBase from '../../firebase/firebaseConfig.js';


const ItemListContainer = () => {
    const [products,setProducts]= useState([]);

        const getProducts= async () => {
            const docs=[];
            const nave= query(collection(dataBase,'Naves'));

            const querySnapshot= await getDocs(nave);
            querySnapshot.forEach(doc)

        };

        useEffect(() => {
            getProducts();
            
        }, []);

        return (
            <div className="Container">
                <ItemList products={products}/>
            </div>
        )
};

export default ItemListContainer;
