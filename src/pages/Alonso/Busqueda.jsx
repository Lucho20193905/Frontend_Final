/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { } from "react-router-dom"
import React from "react"
import Layout from "../../Components1/Layout"
import Header from "../../Components1/Header"
import Footer from "../../Components1/Footer"

const Busqueda = () => {
  return <Layout
    makeHeader={() => <Header titulo="¿Que plataforma usara?" />}
    makeBody={
      () => <div>
        <h2>Que plataforma usara?</h2>
        <div className="container text-center" style={{ alignContent: "initial" }}>
          <div className="row">
            <div className="col" style={{marginLeft:'5px'}}>
              <div className="card" style={{ width: '18rem' }}>
                <img src="./img/pc-icon.png" className="card-img-top" alt="Ofimatica"></img>
                <div className="card-body">
                  <h5 className="card-title">Desktop</h5>
                  <p className="card-text">Un equipo potente con lucecitas</p>
                  <a href="ofimatica.html" className="btn btn-primary">C'on let's go</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img src="./img/laptop-icon.png" className="card-img-top" alt="programing"></img>
                <div className="card-body">
                  <h5 className="card-title">Laptop</h5>
                  <p className="card-text">Deseas llevar tu trabajo a todas partes?</p>
                  <a href="programing.html" className="btn btn-primary">Si soy lit</a>
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

export default Busqueda