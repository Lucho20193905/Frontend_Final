import React from "react";
import { } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from "react-bootstrap/Image";
import { NavDropdown } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg" style={{ height: '45px' }}><Container fluid >
          <Navbar.Brand href="#" ><Image src="img/home.png" rounded style={{ maxHeight: '35px' }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '50px' }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#" className="nav-item active">Support
              </Nav.Link>
              <Nav.Link href="#">Review
              </Nav.Link>
              <NavDropdown title="Mas Opciones" id={`offcanvasNavbarDropdown-expand-${"lg"}`}>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Dale click te daremos un turron
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Unete a la legion
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">Search</Button>
            </Form>
            <Image
              src="iconos/carrito-de-compras.png"
              rounded style={{ maxHeight: '40px', marginLeft: '5px' }} />
            <Image
              src="iconos/usuario.png"
              rounded style={{ maxHeight: '40px', marginLeft: '5px' }} />
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
      <h1>{props.titulo}</h1>
    </>
  );
}

export default Header