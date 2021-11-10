import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBarTienda = () => {
    return (
        <Navbar bg="success" expand="lg" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1632289106/Tu%20Tienda%20Cercana/logo-TTC-01_saviwg.svg"
                        width="200"
                        alt="tu-tienda" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="warning">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBarTienda
