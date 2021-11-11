import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'
import "./CardProductos.css"

const CardProductos = () => {
    return (
    <Container>
    <h1>Nuestros Productos </h1>
        <Row>
            <Col xs={6} md={4}>
                <Image src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1636605665/Tu%20Tienda%20Cercana/VERDURAS_zcl0ma.png" width="300"/>
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1636605665/Tu%20Tienda%20Cercana/VERDURAS_zcl0ma.png" width="300"/>
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1636605665/Tu%20Tienda%20Cercana/VERDURAS_zcl0ma.png" width="300" />
            </Col>
        </Row>
    </Container>
    )
    
}

export default CardProductos
