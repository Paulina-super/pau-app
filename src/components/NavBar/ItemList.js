import React ,{useState, useEffect} from 'react';
import Item from '../NavBar/Item.js';

const ItemList = ()=>{
    const [gato, setGato]= useState([]);
    const [show,setShow]= useState(false);
    const delay=2;
    
    useEffect(()=>{
        let timer=setTimeOut(() =>setShow(true), delay *1000);
        fetch ('https://api.github.com/users')
        .then((response)=>response.json())
        .then((data)=>setGato(data));
        return()=>{
            clearTimeout(timer);
        };
    },[]);

    return (
        <div className="ItemList">
            <h2>Hundiste  mi acorazado</h2>
            {
            gato.map((user)=>{
                return show ? <Item key ={user.id} data = {user}/> : <div></div>;
            })
        }


        </div>

    );


};

export default ItemList;