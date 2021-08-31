import React from 'react'
import ItemCount from '../Contador/ItemCount.js'
import { Card, Image } from 'semantic-ui-react'



const ItemDetail = (data) => {
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
