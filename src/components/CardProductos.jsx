import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CardProductos = () => {
    return (
        <Card className="mt-3 shadow w-75 mx-auto">
            <Card.Img variant="top" src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1633319763/Tu%20Tienda%20Cercana/productos_zqgusu.png" />
            <Card.Body className="d-grid">
                <Button variant="warning" size="">IR</Button>
            </Card.Body>
        </Card>
    )
}

export default CardProductos
