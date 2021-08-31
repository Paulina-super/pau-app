import React from 'react'
import ItemCount from '../Contador/ItemCount.js'

const ItemDetail = () => {
    return (
        <Card>
            <Image src={data.image} wrapped ui={false} />
            <Card.Header>{data.title}</Card.Header>
            <Card.Meta>
                <span className="price">{data.price}</span>
                <p>{data.description}</p>
            </Card.Meta>
            <ItemCount />
            <button onClick={}>Agregar al carrito</button>
        </Card> 
    )
}

export default ItemDetail
