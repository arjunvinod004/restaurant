import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image  from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';


function Viewrest() {
  const urlParams=useParams()
  console.log(urlParams.id);
  const[restaurantlist,setRestaurantlist]=useState([])
  // to create  a function for api call
  const getRestaurant=async()=>{
      // async await
await fetch('/restaurants.json')// aysnc call
.then((data)=>data.json()
  .then((result)=>setRestaurantlist( result.restaurants))
  
)
  }
  console.log(restaurantlist);

  useEffect(()=>{
      getRestaurant()
  },[])
  const Viewrest= restaurantlist.find(item=>item.id==urlParams.id)
  console.log(Viewrest);


  return (
    <div>
      {
       Viewrest?(
        <Row>
        <Col md={3}>
        <Image src={Viewrest.photograph}  fluid />
        </Col>
        <Col md={8}>
        <h1>{Viewrest.name}</h1>
 
        <ListGroup>
      <ListGroup.Item variant="dark">Id:{Viewrest.id}</ListGroup.Item>
      <ListGroup.Item variant="dark">Name:{Viewrest.name}</ListGroup.Item>
      <ListGroup.Item variant="dark">cuisine type:{Viewrest.cuisine_type}</ListGroup.Item>
      <ListGroup.Item variant="dark">Adress:{Viewrest.address}</ListGroup.Item>
      <ListGroup.Item variant="dark">neighborhood:{Viewrest.neighborhood}</ListGroup.Item>
    
     
    </ListGroup>
    <><Restop op={Viewrest.operating_hours}/></>
      <><Restreview review={Viewrest.reviews} /></>
        </Col>
      </Row>
       ):'null'
       
      }
    </div>
  )
}

export default Viewrest
