/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {  } from "react-router-dom"
import React from "react"

const Programing = () => {
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
          <li className="nav-item">
            <a className="nav-link" aria-current="page">
              <img id="Shopcar" src="./iconos/img3.png" alt="Shopcar" style={{width: '28px',height: '30px',
              marginLeft:'5px', marginRight:'5px'}}/>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page">
              <img id="user" src="./iconos/img4.png" alt="user" style={{width: '28px',height: '30px',
              marginLeft:'5px'}}/>
            </a>
          </li>
        </div>
      </div>
    </nav>
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
  </div>
}

export default Programing