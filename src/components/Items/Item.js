import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../Contador/ItemCount'



const Item = ({producto}) => {
  return(     
    <Card>
      <Image src={producto.img} wrapped ui={false} />
      <Card.Header />
      <Card.Meta />
          
      
      <ItemCount stock={10} />
      
    </Card> 
  )
}

export default Item;