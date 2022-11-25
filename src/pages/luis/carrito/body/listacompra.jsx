import React from "react";

import { Row, Col, Card } from 'react-bootstrap'

const GridProductosComprados = (props) => {
    return <div className="mt-4 mb-4">
    {
        props.producto.map((producto) => {
            return <Row className="mb-2">
                <Col>
                    <Card onClick={() => props.onCursoSelected(producto.id)  }>
                        <Card.Body>{ producto.nombre }</Card.Body>
                    </Card>
                </Col>
            </Row>
        })
    }
</div>
}

export default GridProductosComprados
