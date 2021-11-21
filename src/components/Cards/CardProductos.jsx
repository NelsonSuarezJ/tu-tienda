import React from "react";
import { Container } from "react-bootstrap";
// import "./CardProductos.css";

const CardProductos = () => {
  return (
    <Container className="container-cards-productos">
      <div className="background-ola">
        <h1>Nuestros Productos </h1>
        <div className="container-links-cards">
          <a href="https://www.youtube.com" className="imagen-link">
            <img
              src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1636605665/Tu%20Tienda%20Cercana/VERDURAS_zcl0ma.png"
              alt=""
            />
          </a>
          <a href="https://www.youtube.com" className="imagen-link">
            <img
              src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1636605665/Tu%20Tienda%20Cercana/VERDURAS_zcl0ma.png"
              alt=""
            />
          </a>
          <a href="https://www.youtube.com" className="imagen-link">
            <img
              src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1636605665/Tu%20Tienda%20Cercana/VERDURAS_zcl0ma.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="wave"></div>
    </Container>
  );
};

export default CardProductos;
