import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CardBlog = (props) => {
    return (
        <Card className="mt-3 shadow w-75 mx-auto">
            <Card.Title className="p-3">Nuestro Blog Saludable</Card.Title>
            <Card.Img variant="top" src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1633319763/Tu%20Tienda%20Cercana/productos_zqgusu.png" />
            <Card.Body className="d-grid">
                <Button variant="warning" size="">{props.algo}</Button>
            </Card.Body>
        </Card>
    )
}

export default CardBlog
