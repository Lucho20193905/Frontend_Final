/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  } from "react-router-dom";
import "./styles/Surprise.css";

const Main = () => {
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
      <div
        className="h1 container-fluid fst-italic"
        style={{ color: "whitesmoke" }}
      >
        Ranking best seller builds
      </div>
      <div class="accordion col-6 p-4 " id="accordionExample">
        <div class="accordion-item ">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ backgroundColor: "#d86aff" }}
            >
              <img
                style={{ height: "10rem" }}
                src="./image/case2.png"
                alt="case"
              />{" "}
              Monster pc <div className="w-70 p-5">$1200</div>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img
                className="col"
                style={{ height: "3rem" }}
                src="./image/procesador.png"
                alt=""
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Procesador Ryzen 5 3600
            </div>
            <div class="accordion-body">
              <img style={{ height: "3rem" }} src="./image/ram.jpg" alt="" />{" "}
              &nbsp;&nbsp;2 X RAM de 8GB hyper x
            </div>
            <div class="accordion-body">
              <img style={{ height: "3rem" }} src="./image/nvidia.png" alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tarjeta de video GTX 2080ti
              msi
            </div>
            <div class="accordion-body">
              <img style={{ height: "3rem" }} src="./image/placa.png" alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Motherboard b-450m asus prime
            </div>
            <div class="accordion-body">
              <img style={{ height: "3rem" }} src="./image/hdd.png" alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Disco Duro 1tb
            </div>
          </div>
        </div>
      </div>

      <div class="accordion col-6 p-4" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ backgroundColor: "#d86aff" }}
            >
              <img
                style={{ height: "10rem" }}
                src="./image/case2.png"
                alt="case"
              />{" "}
              CRUSER PC<div className="w-70 p-5">$2400</div>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="accordion-body">
                <img
                  style={{ height: "3rem" }}
                  src="./image/procesador.png"
                  alt=""
                />{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Procesador RYZEN 7 3700
              </div>
              <div class="accordion-body">
                <img style={{ height: "3rem" }} src="./image/ram.jpg" alt="" />{" "}
                &nbsp;&nbsp;2 X RAM de 16GB hyper x
              </div>
              <div class="accordion-body">
                <img
                  style={{ height: "3rem" }}
                  src="./image/nvidia.png"
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tarjeta de video rtx 3070ti
                msi
              </div>
              <div class="accordion-body">
                <img
                  style={{ height: "3rem" }}
                  src="./image/placa.png"
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Motherboard Z490m-plus asus prime
              </div>
              <div class="accordion-body">
                <img style={{ height: "3rem" }} src="./image/hdd.png" alt="" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Disco Duro 2tb
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="accordion col-6 p-4">
        <div class="accordion-item ">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ backgroundColor: "#d86aff" }}
            >
              <img
                style={{ height: "10rem" }}
                src="./image/case2.png"
                alt="case"
              />{" "}
              NASA PC<div className="w-70 p-5">$3600</div>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="accordion-body">
                <img
                  style={{ height: "3rem" }}
                  src="./image/procesador.png"
                  alt=""
                />{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Procesador RYZEN 7 3700
              </div>
              <div class="accordion-body">
                <img style={{ height: "3rem" }} src="./image/ram.jpg" alt="" />{" "}
                &nbsp;&nbsp;2 X RAM de 16GB HyperX Fury DDR4
              </div>
              <div class="accordion-body">
                <img
                  style={{ height: "3rem" }}
                  src="./image/nvidia.png"
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tarjeta de video rtx 3090ti
                msi
              </div>
              <div class="accordion-body">
                <img
                  style={{ height: "3rem" }}
                  src="./image/placa.png"
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Motherboard B560-A gaming asus
                prime
              </div>
              <div class="accordion-body">
                <img style={{ height: "3rem" }} src="./image/hdd.png" alt="" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Disco Duro 4tb
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
}

export default Main;
