import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Product = (props) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
{props.children}    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        Vous êtes à une touche de votre jungle personnelle - Prenez une photo de votre plante et Planta s'occupe du reste !
        </Card.Text>
        <Button onClick={()=>alert(`the product mark is ${props.mark}`)} variant="primary">Go planet vert </Button>
      </Card.Body>
    </Card> 
    </div>
  )
}

export default Product