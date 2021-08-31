import React, {useState, useEffect} from 'react'
import ItemCount from '../Contador/ItemCount.js'
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react'



const ItemDetail = ({id}) => {
    const[detalle,setDetalle] = useState([]);
    console.log(id);

    useEffect(()=>{
        axios('https://fakestoreapi.com/products/${id}')
            .then((res) => setDetalle(res.data));
            
    }, []);


    return (
        <Card>
            <Image src={data.image} wrapped ui={false} />
            <Card.Header>{data.title}</Card.Header>
            <Card.Meta>
                <span className="price">{data.price}</span>
                <p>{data.description}</p>
            </Card.Meta>
            <ItemCount />
            
        </Card> 
    )
}

export default ItemDetail
