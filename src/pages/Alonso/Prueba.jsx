/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import Layout from "../../Components/Layout";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useEffect } from "react";

const Prueba = () => {

  const [listaProducto, setListaProducto] = useState([])
  const [listaPcArmado, setListaPcArmado] = useState([])
  const navigate = useNavigate()

  const httpObtenerProducto = async() =>{
    const resp = await fetch("http://localhost:4444/productos")
    const data = await resp.json()

    console.log(data)
    setListaProducto(data)
  }

  useEffect(()=>{
    httpObtenerProducto()
  },[])

  return <Layout
    makeHeader={() => <Header titulo="Equipos Disponibles" />}
    makeBody={
      () => <div>
        <h2>No quieres ver la luza del sol verdad?</h2>
        <div class="container text-center">
          <div class="row" style={{marginLeft:'5px'}}>
            <div class="col">
              <div class="card" style={{ width: '18rem'}}>
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
              <div class="card" style={{ width: '18rem' }}>
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
              <div class="card" style={{ width: '18rem' }}>
                <img src="./img/dellVostro.png" class="card-img-top" alt="dellVostro"></img>
                <div class="card-body">
                  <h5 class="card-title">Dell Vostro 14 3000</h5>
                  <p class="card-text">[Descripcion increible de un producto tenologico]</p>
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
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Prueba