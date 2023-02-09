import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Prpostypes from 'prop-types'
const Product = (props) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
{props.children}    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.country}
        </Card.Text>
        <Button onClick={()=>alert(`the product mark is ${props.mark}`)} variant="primary">Go planet vert </Button>
      </Card.Body>
    </Card> 
    </div>
  )
}

Product.Prpostypes= {
  mark: Prpostypes.string,
  name: Prpostypes.string,
}

Product.defaultPropos= {
  country :  'France'
}

export default Product