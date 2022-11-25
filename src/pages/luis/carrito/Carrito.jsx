/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  } from "react-router-dom";
import "./styles/Surprise.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image";
import { Modal } from "react-bootstrap";

  return <Layout
        makeHeader={ () => <Header titulo="Carrito de compra" /> }
        makeBody={ 
            () =>  <div>
                <GridProductosComprados
                    producto={ listadoProducto }/>
            </div>
        }
        makeFooter={() => <Footer></Footer>}
    />
}

export default Carrito




