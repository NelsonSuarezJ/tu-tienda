import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselTienda = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1632289106/Tu%20Tienda%20Cercana/imagen-header_dk3kos.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1632289107/Tu%20Tienda%20Cercana/imagen-header-2_r1uzhj.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1632289107/Tu%20Tienda%20Cercana/imagen-header-3_j73x1z.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselTienda
