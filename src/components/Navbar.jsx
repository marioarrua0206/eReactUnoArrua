import React from "react";
import Logo from './Logo'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'


function ColorSchemesExample() {
    return (
      <>    
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#cart"><CartWidget/></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default ColorSchemesExample;