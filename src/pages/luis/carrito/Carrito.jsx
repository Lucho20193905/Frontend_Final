/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Header from "../../../components/Header"
import { RUTA_BACKEND } from "../../../conf"

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

  return <layout>
    makeHeader = {() => <Header>
      </Header>}
  </layout>
}

export default Carrito




