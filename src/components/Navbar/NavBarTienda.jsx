import React from "react";
import {
  Container,
  Dropdown,
  Form,
  FormControl,
  Button,
  DropdownButton,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "./NavBarTienda.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { NavLink } from "react-router-dom";

const NavBarTienda = () => {
  return (
    <Navbar bg="success" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1632289106/Tu%20Tienda%20Cercana/logo-TTC-01_saviwg.svg"
            width="200"
            alt="tu-tienda"
          />
        </Navbar.Brand>
        <NavbarToggle sria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link mx-2" >INICIO</NavLink>
            <NavLink to="/productos" className="nav-link mx-2">PRODUCTOS</NavLink>
            <NavLink to="/tiendas" className="nav-link mx-2">TIENDAS</NavLink>
            <NavLink to="/blog" className="nav-link mx-2">BLOG</NavLink>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Busca tu producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Buscar</Button>
          </Form>

          <DropdownButton id="dropdown-basic-button" title="Usuario">
            <Dropdown.Header id="dropdown-header">
              {/* <Row>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </Row> */}
              <Row>Usuario</Row>
              <Dropdown.Divider />
            </Dropdown.Header>
            <Dropdown.Item href="#">Cerrar Sesion</Dropdown.Item>
            {/*  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
          </DropdownButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarTienda;
