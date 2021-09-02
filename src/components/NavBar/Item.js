import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../Contador/ItemCount'
import ItemDetail from './ItemDetail'


const Item = ({data}) => (
     
  <Card>
    <Image src={data.image} wrapped ui={false} />
    <Card.Header>{data.title}</Card.Header>
    <Card.Meta>
        <span className="price">{data.price}</span>
    </Card.Meta>
    <ItemCount stock={10} />
    <ItemDetail />
  </Card> 
  
  
)

export default Item;