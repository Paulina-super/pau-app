import React, {useState, useEffect} from 'react'
import ItemDetail from '../NavBar/ItemDetail.js';

import axios from 'axios';
import Spinner from '../Spinner/Spinner.js';

const ItemDetailContainer = () => {
    const[data,setData] = useState({});
    const [detallando,setDetallando]=useState(true);
    
    
    useEffect(()=>{
        axios('https://fakestoreapi.com/products/${id}')
            .then((res) => setData(res.data));
            setTimeout(() => {
                setDetallando(false);  
            }, 2000);
    }, []);

    return (
        <div className="ItemDet">
            {detallando ? <ItemDetail dataProp={product}/>: <Spinner /> }          
        </div>
    );
};

export default ItemDetailContainer;
