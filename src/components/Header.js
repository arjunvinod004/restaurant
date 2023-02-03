import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn5.vectorstock.com/i/1000x1000/37/34/round-restaurant-icon-vector-2173734.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            &nbsp;
            Find My Restuarant 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
