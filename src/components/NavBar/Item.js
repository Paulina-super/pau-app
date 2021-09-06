import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../Contador/ItemCount'
import ItemDetail from './ItemDetail'


const Item = ({producto}) => {
  return(     
    <Card>
      <Image src={producto.image} wrapped ui={false} />
      <Card.Header>{producto.title}</Card.Header>
      <Card.Meta>
          <span className="price">{producto.price}</span>
      </Card.Meta>
      <ItemCount stock={10} />
      <ItemDetail />
    </Card> 
  )
}

export default Item;