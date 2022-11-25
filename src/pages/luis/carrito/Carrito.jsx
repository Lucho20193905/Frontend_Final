/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Header from "../../../components/Header"
import { RUTA_BACKEND } from "../../../conf"
import Layout from "../../../components/Layout"
import GridProductosComprados from "./body/listacompra"

const Carrito = () =>{
  const [listadoOrdenProducto, setListadoOrdenProducto] = useState([])

  const navigate = useNavigate() //hook de navegacion

  const httpObtenerOrdenProducto = async () => {
    const resp = await fetch(`${RUTA_BACKEND}/orden`)
    const data = await resp.json()
    console.log(data)
    setListadoOrdenProducto(data)
  }
  useEffect(() => {
    httpObtenerOrdenProducto()
  },[])

  return <Layout
        makeHeader={ () => <Header titulo="Carrito de compra" /> }
        makeBody={ 
            () =>  <div>
                <GridProductosComprados
                    carreras={ listadoOrdenProducto }
                    />
            </div>
        }
        
    />
}

export default Carrito




