/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import {  } from "react-router-dom";

const HistorialOrden = () => {
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
      <div className="row">
        <div className="col-4">
          <div className="container row" style={{ marginLeft: "2px" }}>
            <div
              className="col-sm btn bg-light"
              style={{ marginTop: "10px", padding: "15px" }}
            >
              Order History
            </div>
            <div
              className="col- sm btn bg-light"
              style={{ marginTop: "15px", padding: "15px" }}
            >
              Profile info
            </div>
            <div
              className="col-sm btn bg-light"
              style={{ marginTop: "15px", padding: "15px" }}
            >
              Log Out
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className=" container row">
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "40px", marginRight: "60px" }}
                src="./iconos/keyboard-mouse.png"
                alt=""
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Keyboard and mouse bundle
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $39
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              10/12/2022
            </div>
          </div>
          <div className=" container row">
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "40px", marginRight: "60px" }}
                src="./iconos/intel.png"
                alt=""
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              INTEL CORE I7-12700F 12-CORE
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $359
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              10/12/2022
            </div>
          </div>
          <div className=" container row">
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "40px", marginRight: "60px" }}
                src="./iconos/nvidia.png"
                alt=""
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              NVIDIA GEFORCE RTX 3070 8GB (VR READY)
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $679
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              10/12/2022
            </div>
          </div>
          <div className=" container row">
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "40px", marginRight: "60px" }}
                src="./iconos/1tb.png"
                alt=""
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              1TB NVME M.2
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $99
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              10/12/2022
            </div>
          </div>
          <div className=" container row">
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "40px", marginRight: "60px" }}
                src="./iconos/coolermaster.png"
                alt=""
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              COOLER MASTER TD500 RGB
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $99
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              10/12/2022
            </div>
          </div>
          <div className=" container row ">
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{ height: "40px", marginRight: "60px" }}
                src="./iconos/img1.png"
                alt="no hay"
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              BUILD + SETUP + TESTING + WARRANTY
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $99
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              10/12/2022
            </div>
          </div>
        </div>
      </div>
    </div>
}
export default HistorialOrden;
