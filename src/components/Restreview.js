import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function Restreview({review}) {
  const [open, setOpen] = useState(false);

  console.log(review);
  return (
    review.map(item=>(
      <Card style={{ float:'right' }} className='border m-3'>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
        <Card.Text>
         Rating:{item.rating}
         </Card.Text>
         Comments:
         <Button className='btn btn-dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        {item.comments}
        </div>
      </Collapse>
        
       
       
      </Card.Body>
    </Card>
    
  ))
  )
}

export default Restreview
