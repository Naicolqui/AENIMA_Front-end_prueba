import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import viajes from '../Assets/logo/logo_01.png';
import './css/Menu.scss';

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img alt="not found" src={viajes}/></Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='navText'>
            <a href="#home">HOME</a>
            <a href="#tendencias">TENDENCIAS</a>
            <a href="#blog">BLOG</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;