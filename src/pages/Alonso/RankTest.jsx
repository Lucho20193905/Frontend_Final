/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { } from "react-router-dom";
import React from "react";
import Layout from "../../Components/Layout";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ListaProductVendido from "./Auxiliar/ListaProductVendido";
import { useState } from "react";
import { useEffect } from "react";

const RankTest = () => {

  const [listaProductoVendidos, setListaProductVendidos] = useState([])

  const httpObtenerProductVendidos = async() =>{
    const resp = await fetch("http://localhost:4444/productos")
    const data = await resp.json()
    setListaProductVendidos(data)
  }

  useEffect(() => {
    httpObtenerProductVendidos()
  },[])

  return <Layout
    makeHeader={() => <Header titulo="Top 5 productos mas vendidos" />}
    makeBody={
      () => <div>
        <ListaProductVendido productos={listaProductoVendidos}/>
      </div>
    }

    makeFooter={()=> <Footer />}
  />
}

export default RankTest