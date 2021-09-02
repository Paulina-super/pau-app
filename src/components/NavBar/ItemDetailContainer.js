import React, {useState, useEffect} from 'react'
import ItemDetail from '../NavBar/ItemDetail.js';
import axios from 'axios';
import Spinner from '../Spinner/Spinner.js';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const[data,setData] = useState();
    const [detallando,setDetallando]=useState(true);
    const {categoryId}= useParams()
    
    useEffect(()=>{
        axios('https://fakestoreapi.com/products/${id}')
            .then((res) => setData(res.data));
            setTimeout(() => {
                setDetallando(false);  
            }, 2000);
    }, []);

    return (
        
        <div className="ItemDet">
            <h4>{categoryId}</h4>
            {detallando ? <ItemDetail />: <Spinner /> }          
        </div>
    );
};

export default ItemDetailContainer;
