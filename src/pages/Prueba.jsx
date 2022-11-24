/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {  } from "react-router-dom"
import React from "react"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from "react-bootstrap/Image";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavDropdown } from "react-bootstrap";

const Prueba = () => {
  return (
    <>
      <div>
      <Navbar bg="light" expand="lg" style={{height: '45px'}}>
      <Container fluid >
        <Navbar.Brand href="#" ><Image
          src="img/home.png"
          rounded style={{ maxHeight: '35px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#" className="nav-item active">
              Support
            </Nav.Link>
            <Nav.Link href="#">
              Review
            </Nav.Link>
            <NavDropdown
                    title="Mas Opciones"
                    id={`offcanvasNavbarDropdown-expand-${"lg"}`}
                  >
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
            rounded style={{ maxHeight: '40px', marginLeft: '5px'}} />
          <Image
            src="iconos/usuario.png"
            rounded style={{ maxHeight: '40px',marginLeft : '5px'}} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    <h2>No quieres ver la luza del sol verdad?</h2>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="card" style={{width: '18rem'}}>
            <img src="./img/x270.png" class="card-img-top" alt="x270"></img>
            <div class="card-body">
              <h5 class="card-title">Lenovo Thinkpad X270</h5>
              <p class="card-text">Serie X para mayor teraflops</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Screen Size 13 Inches</li>
                <li class="list-group-item">Resolution 1600x980 Display</li>
                <li class="list-group-item">Ram Memory Installed Size 8 GB</li>
                <li class="list-group-item">Hard Disk Size 256 GB</li>
                <li class="list-group-item">CPU Model Core i5 5600U</li>
                <li class="list-group-item">Card Description Integrated Intel HD Graphics 620</li>
                <li class="list-group-item">CPU Speed 2.5 GHz</li>
                <li class="list-group-item">Hard Disk Description SSD</li>
              </ul>
              <a href="www.google.com" class="btn btn-primary">Comprar</a>
              <a href="www.google.com" class="btn btn-success">Agregar al carrito</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{width: '18rem'}}>
            <img src="./img/T420.png" class="card-img-top" alt="T420"></img>
            <div class="card-body">
              <h5 class="card-title">Lenovo Thinkpad T420</h5>
              <p class="card-text">La ultima en la serie T con teclado ergonomico y con libreBoot.</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Screen Size 14 Inches </li>
                <li class="list-group-item">Resolution 1366x768 Display</li>
                <li class="list-group-item">Ram Memory Installed Size 8 GB DDR3</li>
                <li class="list-group-item">CPU Model Core i5 2520M</li>
                <li class="list-group-item">Card Description Integrated Intel HD Graphics 4000</li>
                <li class="list-group-item">CPU Speed 2.4 GHz</li>
                <li class="list-group-item">Hard Disk 512 GB SSD</li>
              </ul>
              <a href="www.google.com" class="btn btn-primary">Comprar</a>
              <a href="www.google.com" class="btn btn-success">Agregar al carrito</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{width: '18rem'}}>
            <img src="./img/dellVostro.png" class="card-img-top" alt="dellVostro"></img>
            <div class="card-body">
              <h5 class="card-title">Dell Vostro 14 3000</h5>
              <p class="card-text">.</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Screen Size 14 Inches</li>
                <li class="list-group-item">Resolution 1366x768 Display</li>
                <li class="list-group-item">Ram Memory Installed Size 8 GB DDR4</li>
                <li class="list-group-item">CPU Model Core i7-7020U</li>
                <li class="list-group-item">Card Description Integrated Intel HD Graphics 620</li>
                <li class="list-group-item">CPU Speed 2.3 GHz</li>
                <li class="list-group-item">Hard Disk 1 TB HDD</li>
              </ul>
              <a href="www.google.com" class="btn btn-primary">Comprar</a>
              <a href="www.google.com" class="btn btn-success">Agregar al carrito</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default Prueba