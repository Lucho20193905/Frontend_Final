import React from "react";
import Row from 'react-bootstrap/Row';
import Product from "../Product";

const ListaPcArmado = (props) => {
  //console.log(props.pcarmado)
  return (
    <div className='row-wrapper'>
      <Row>
        {props.pcarmado.map(pcarmado => (
          <Product key={pcarmado.id} {...pcarmado}
          nombre={pcarmado.nombre}
          descripcion={pcarmado.descripcion}/>
        ))}
      </Row>
    </div>
  )
};

export default ListaPcArmado