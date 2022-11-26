/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import Layout from "../../Components/Layout";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useEffect } from "react";
import ListaPcArmado from "./Auxiliar/ListaPcArmado";

const Prueba = () => {

  const [listaProducto, setListaProducto] = useState([])
  const [listaPcArmado, setListaPcArmado] = useState([])
  const navigate = useNavigate()

  const httpObtenerPcArmado = async(descripcion = null) =>{
    const ruta = descripcion == null?
      "http://localhost:4444/pcarmado" :
      `http://localhost:4444/pcarmado?descripcion=${descripcion}`

    const resp = await fetch(ruta)
    const data = await resp.json()
    //console.log(data)
    setListaPcArmado(data)
  }

  useEffect(()=>{
    httpObtenerPcArmado()
  },[])

  return <Layout
    makeHeader={() => <Header titulo="Equipos Disponibles" />}
    makeBody={
      () => <div>
        <ListaPcArmado pcarmado={listaPcArmado}/>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Prueba