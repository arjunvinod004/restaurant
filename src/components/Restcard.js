import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';



function Restcard({restaurant}) {
    console.log(restaurant)
  return (
    
    <Col className='mt-3' sm={12} md={6} lg={4} xl={3}>
        <Link to={`Viewrest/${restaurant.id}`} style={{textDecoration:"none",color:"white"}}>
        <Card >
      <Card.Img className='p-3' variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
        {restaurant.neighborhood}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Link>
    </Col>
    
  )
}

export default Restcard
