import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import ItemCount from '../Contador/ItemCount'

const CardComponents = ({image , name , description, button}) => (
  <Card
    image='/images/avatar/large/elliot.jpg'
    name='Food'
    description='Cat'
   >
    <ItemCount />
  </Card> 
  
)

export default CardComponents