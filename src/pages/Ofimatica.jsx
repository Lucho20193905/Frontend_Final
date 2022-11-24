/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {} from "react-router-dom";
import React from "react";

const Ofimatica = () => {
  return (
    <div>
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
      <h2>Esto es lo que tenemos disponible</h2>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="./img/t470.png"
                className="card-img-top"
                alt="T470s"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Lenovo Thinkpad T470s</h5>
                <p className="card-text">
                  La gama empresarial de Lenevo por fin en nuestra tienda
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Screen Size 14 Inches</li>
                  <li className="list-group-item">
                    Ram Memory Installed Size 8 GB
                  </li>
                  <li className="list-group-item">Hard Disk Size 256 GB</li>
                  <li className="list-group-item">CPU Model Core i7 6600U</li>
                  <li className="list-group-item">
                    Card Description Integrated Intel HD Graphics 520
                  </li>
                  <li className="list-group-item">CPU Speed 2.6 GHz</li>
                  <li className="list-group-item">Hard Disk Description SSD</li>
                </ul>
                <a href="www.google.com.pe" className="btn btn-primary">
                  Comprar
                </a>
                <a href="www.google.com.pe" className="btn btn-success">
                  Agregar al carrito
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="./img/dellInspiron.png"
                className="card-img-top"
                alt="dellInspiron"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Dell Inspiron 3583</h5>
                <p className="card-text">
                  Serie tope usada por empresas del sector bancario por su
                  fiabilidad.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Screen Size 15.6 Inches</li>
                  <li className="list-group-item">
                    Ram Memory Installed Size 4 GB DDR4
                  </li>
                  <li className="list-group-item">CPU Model Celeron N4020</li>
                  <li className="list-group-item">
                    Card Description Integrated Intel HD Graphics 610
                  </li>
                  <li className="list-group-item">CPU Speed 2.4 GHz</li>
                  <li className="list-group-item">
                    128GB M.2 PCIe NVMe SSD storage
                  </li>
                  <li className="list-group-item">Hard Disk 500 GB HDD</li>
                </ul>
                <a href="www.google.com.pe" className="btn btn-primary">
                  Comprar
                </a>
                <a href="www.google.com.pe" className="btn btn-success">
                  Agregar al carrito
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="./img/asus.png"
                className="card-img-top"
                alt="Asus"
              ></img>
              <div className="card-body">
                <h5 className="card-title">ASUS L410 MA-DB02</h5>
                <p className="card-text">
                  Ideal para esas largas horas haciendo reportes en Excel.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Screen Size 14 Inches</li>
                  <li className="list-group-item">
                    14” Full HD (1920x1080) Display
                  </li>
                  <li className="list-group-item">
                    Ram Memory Installed Size 8 GB DDR4
                  </li>
                  <li className="list-group-item">CPU Model Celeron N4020</li>
                  <li className="list-group-item">
                    Card Description Integrated Intel UHD Graphics 600
                  </li>
                  <li className="list-group-item">CPU Speed 2.8 GHz</li>
                  <li className="list-group-item">128GB SSD storage</li>
                  <li className="list-group-item">Hard Disk 500 GB HDD</li>
                </ul>
                <a href="www.google.com.pe" className="btn btn-primary">
                  Comprar
                </a>
                <a href="www.google.com.pe" className="btn btn-success">
                  Agregar al carrito
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ofimatica;
