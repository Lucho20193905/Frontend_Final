/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  } from "react-router-dom";


const Building = () => {
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
      <div className="container text-self display-5">
        <div className="col-md-4 fst-italic" style={{ color: "white" }}>
          <strong>Your Optimizied PC!</strong>
        </div>
        <div>
          <button
            style={{ position: "relative", left: "50%", width: "12%" }}
            type="button"
            class="btn btn-light btn-lg"
          >
            {" "}
            Back{" "}
          </button>
          <button
            style={{ position: "relative", left: "70%", height: "12%" }}
            className="btn btn-light btn-lg"
            type="button"
          >
            <img
              style={{ height: "2rem" }}
              src="./image/carrito-de-compras.png"
              alt=""
            />
            &nbsp;Checkout
          </button>

          <div
            className="text-center"
            style={{ color: "white", position: "relative", left: "22%" }}
          >
            <strong>Components</strong>
          </div>
        </div>
      </div>
      <div class="container-left  ">
        <div>
          <img
            className="w-20"
            style={{ height: "20rem", position: "relative", left: "11%" }}
            src="./image/case2.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <br />
        <div
          class="container   "
          style={{
            width: "12%",
            backgroundColor: "gray",
            position: "relative",
            left: "-30%",
          }}
        >
          <div className="text-center fw-bold">Components Price</div>
          <div>
            {" "}
            <strong>-$ 1899</strong>
          </div>
          <div className="text-center fw-bold">Build Fee</div>
          <div className="fw-bold"> -$ 99</div>
        </div>
      </div>

      <div
        class="row mb-4 w-50 p-2"
        style={{
          height: "100px",
          position: "relative",
          left: "40%",
          bottom: "25rem",
        }}
      >
        <div class="col-6" style={{ height: "100%" }}>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "4rem", marginRight: "30px" }}
                src="./image/procesador.png"
                alt="procesador"
              />
            </div>
            <div
              className="col-6 navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Procesador Ryzen 5 3500
            </div>
            <div
              className="col-sm navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $350
            </div>
          </div>
        </div>

        <div class="col-6" style={{ height: "100%" }}>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "4rem", marginRight: "30px" }}
                src="./image/nvidia.png"
                alt="case"
              />
            </div>
            <div
              className="col-6 navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Tarjeta Nvidia gtx 1660ti
            </div>
            <div
              className="col-sm navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $300
            </div>
          </div>
        </div>
      </div>
      <div
        class="row mb-4 w-50 p-2"
        style={{
          height: "100px",
          position: "relative",
          left: "40%",
          bottom: "25rem",
        }}
      >
        <div class="col-6" style={{ height: "100%" }}>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "4rem", marginRight: "30px" }}
                src="./image/hdd.png"
                alt="hdd"
              />
            </div>
            <div
              className="col-6 navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              Hdd Seagate 1TB
            </div>
            <div
              className="col-sm navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $29
            </div>
          </div>
        </div>

        <div class="col-6" style={{ height: "100%" }}>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "4rem", marginRight: "30px" }}
                src="./image/case2.png"
                alt="case"
              />
            </div>
            <div
              className="col-6 navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Case Cooler Master
            </div>
            <div
              className="col-sm navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $39
            </div>
          </div>
        </div>
      </div>
      <div
        class="row mb-4 w-50 p-2"
        style={{
          height: "100px",
          position: "relative",
          left: "40%",
          bottom: "25rem",
        }}
      >
        <div class="col-6" style={{ height: "100%" }}>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "4rem", marginRight: "30px" }}
                src="./image/placa.png"
                alt="case"
              />
            </div>
            <div
              className="col-6 navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Motherboard b460M asus
            </div>
            <div
              className="col-sm navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $59
            </div>
          </div>
        </div>

        <div class="col-6" style={{ height: "100%" }}>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "4rem", marginRight: "30px", width: "4rem" }}
                src="./image/ram.jpg"
                alt="case"
              />
            </div>
            <div
              className="col-6 navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Ram 8gb HYPER X
            </div>
            <div
              className="col-sm navbar  navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $30
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Building;