import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Item = ({image , name , description, button}) => (
  <div className="ItemContainer">
      <Card
        image='/images/avatar/large/elliot.jpg'
        name='Food'
        description='Cat'
        button={extra}
       />
  </div>
)

export default Item;