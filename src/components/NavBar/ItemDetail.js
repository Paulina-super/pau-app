import React, {useState, useEffect} from 'react'
import ItemCount from '../Contador/ItemCount.js'
import axios from 'axios';
import Item from '../NavBar/Item.js'


const ItemDetail = ({data}) => {
    const[detalle,setDetalle] = useState([]);

    useEffect(()=>{
        axios('https://fakestoreapi.com/products/${id}')
            .then((res) => setDetalle(res.data));
            
    }, []);


    return (
        <div className="ItemDetail">
            {detalle.map((data) => {
                return <Item key={data.id} data={}/>;
            })}
            <ItemCount />
        </div>
            
            
        
    )
}

export default ItemDetail
