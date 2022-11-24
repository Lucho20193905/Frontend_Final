/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { } from "react-router-dom"
import React from "react"

const Requets = () => {
  return <div>
    <nav className="navbar navbar-expand-lg bg-light" style={{height: '45px'}}>
      <div className="container-fluid">
        <a className="nav-link active" aria-current="page" href="www.google.com.pe"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-1" style={{height: '40px'}}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                <img id="home" src="./img/home.png" alt="home" width="28" height="30" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="Requets.jsx">Suport!</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Ranking</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mas opciones
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/index.html">Action</a></li>
                <li>
                  <a className="dropdown-item" href="img/rickroll.gif">
                    Dale Click te daremos un turron
                  </a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Unete a la legion</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <h2>¿Que uso le dara al equipo?</h2>
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className="card" style={{width: '18rem'}}>
            <img src="./img/Ofimatica.jpg" className="card-img-top" alt="Ofimatica"></img>
            <div className="card-body">
              <h5 className="card-title">Ofimatica</h5>
              <p className="card-text">Microsoft office a 60 fps?.</p>
              <a href="ofimatica.html" className="btn btn-primary">Dale Candela</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width: '18rem'}}>
            <img src="./img/programing.png" className="card-img-top" alt="programing"></img>
            <div className="card-body">
              <h5 className="card-title">Programacion</h5>
              <p className="card-text">¿Html no es suficente para ti y deseas programar como hombre?.</p>
              <a href="programing.html" className="btn btn-primary">¿Que esperas?</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width: '18rem'}}>
            <img src="./img/GTA_Vice_City_Box_Art.png" className="card-img-top" alt="Gamming"></img>
            <div className="card-body">
              <h5 className="card-title">VideoJuegos</h5>
              <p className="card-text">Para correr los juegos de ultima generacion en alto rendimiento.</p>
              <a href="gamming.html" className="btn btn-primary">Let's dance baby</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Requets