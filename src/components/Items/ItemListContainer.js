import {useEffect, useState} from 'react';
import '../Items/ItemListContainer.css';
import ItemList from './ItemList.js';
import {query,getFirestore} from "firebase/firestore";
import dataBase from '../../firebase/firebaseConfig.js';


const ItemListContainer = () => {
    const [products,setProducts]= useState([]);

        const getProducts= async () => {
            const docs=[];
            const nave= query(dataBase,'Naves');

            const querySnapshot= await getDocs(nave);
            querySnapshot.docs.map((doc)=>{
                docs.push({...doc.data(), id:doc.id});
            });
            setProducts(docs);

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
