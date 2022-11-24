/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {} from "react-router-dom";
import React from "react";

const Ranking = () => {
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
    <h2>Top5: Ranking de productos mas vendidos</h2>
    <div style={{ height: "30px" }}></div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h5>1.- Tarjeta De Video Asus Tuf Gaming Oc gtx1650 4gb Gddr6</h5>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-label="Basic example" 
              style={{width: "98%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="card" style={{width: "14rem",height: "13rem",marginBottom: "20px",marginLeft: "60px",}}>
              <img src="/img/tuf.png" class="card-img-top" alt="1650" style={{ height: "200px", width: "200px" }}></img>
            </div>
          </div>
          <div class="col">
            <h5>2.- Core i7-11900k</h5>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" aria-label="Basic example"
                style={{ width: "91%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="card" style={{width: "14rem",height: "13rem",marginBottom: "20px",marginLeft: "60px",}}>
              <img src="/img/i7.png" class="card-img-top" alt="i7" style={{ height: "200px", width: "200px" }}></img>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5>3.- Gabinete Pc Gamer Cooler Master H500 Argb Templado Midtower</h5>
          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example"
              style={{ width: "82%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="card" style={{width: "14rem",height: "13rem",marginBottom: "20px",marginLeft: "60px",}}>
              <img src="/iconos/coolermaster.png" class="card-img-top" alt="coolerMaster"
              style={{ height: "200px", width: "200px" }}></img>
            </div>
          </div>
        <div class="col">
          <h5>4.- Ssd Sata A400 480gb</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "69%" }}
              aria-valuenow="25" aria-valuemin="0"aria-valuemax="100"></div>
            </div>
            <div class="card" style={{width: "14rem",height: "13rem",marginBottom: "20px",marginLeft: "60px",}}>
              <img src="/img/ssd.png" class="card-img-top" alt="ssd" style={{ height: "200px", width: "200px" }}></img>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h5>5.- Memoria Ram 8gb 2600mhz Laptop Kingston</h5>
            <div class="progress">
              <div class="progress-bar bg-info" role="progressbar" aria-label="Basic example" style={{ width: "66%" }}
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="card" style={{width: "18rem",height: "10rem",marginBottom: "20px",marginLeft: "60px",}}>
              <img src="/img/ram8.png" class="card-img-top" alt="Core"></img>
            </div>
          </div>
          <div class="col">
            <h5>Intel (59%) vs AMD (41%)</h5>
            <div class="progress">
            <div class="progress-bar" role="progressbar" style={{ width: "59%" }} aria-valuenow="15"
            aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-danger" role="progressbar" style={{ width: "41%" }} aria-valuenow="30"
            aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
  </div>
}

export default Ranking;
