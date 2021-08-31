import React from 'react'
import { Card, Icon } from 'semantic-ui-react'


const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const CardComponents = ({image , name , description, button}) => (
  <Card
    image='/images/avatar/large/elliot.jpg'
    name='Food'
    description='Cat'
    button={extra}
  />
)

export default CardComponents