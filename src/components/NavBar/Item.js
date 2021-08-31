import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../Contador/ItemCount'

const Item = ({data}) => (
  <Card>
    <Image src={data.image_url} wrapped ui={false} />
    <Card.Header>{data.sku}</Card.Header>
    <Card.Meta>
        <span className="price">{data.regular_price_with_tax}</span>
    </Card.Meta>
    <ItemCount />
  </Card> 
  
)

export default Item;