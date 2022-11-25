/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react"
//import { useNavigate } from "react-router"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import Layout from "../../../components/Layout"
import GridProductosComprados from "./body/listacompra"

const Carrito = () =>{
  const [listadoProducto, setListadoProducto] = useState([])

  //const navigate = useNavigate() //hook de navegacion

  const httpObtenerProducto = async () => {
    const resp = await fetch("http://localhost:4447/orden")
    const data = await resp.json()
    console.log(data)
    setListadoProducto(data)
  }
  useEffect(() => {
    httpObtenerProducto()
  },[])

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




