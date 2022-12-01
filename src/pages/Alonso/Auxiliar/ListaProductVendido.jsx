import React from "react";
import Row from 'react-bootstrap/Row';
import RankingProp from "../RankingProp";

const ListaProductVendido = (props) => {
  //console.log(props.pcarmado)
  return (
    <div className='row-wrapper'>
      <Row>
        {props.productos.map(productos => (
          <RankingProp key={productos.id} {...productos}
          nombre={productos.nombre}/>
        ))}
      </Row>
    </div>
  )
};

export default ListaProductVendido