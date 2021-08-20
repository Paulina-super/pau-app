import React ,{useState, useEffect} from 'react';
import Item from './NavBar/Item';

const ItemList = ()=>{
    const [Gato]= useState([]);
    const tiempo=2;
    
    useEffect(()=>{
        let timer=setTimeOut(() =>setShow(true), tiempo *1000);
        fetch ()
        .then((response)=>response.json())
        .then((json)=>console.log(json));
    });

    return (
        <div className="ItemList">



        </div>

    );


};

export default ItemList;