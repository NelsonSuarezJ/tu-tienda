import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap'

const NavBarTienda = () => {
    return (
        <Navbar style={{ backgroundColor: '#2f7a2c' }} expand="lg" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1632289106/Tu%20Tienda%20Cercana/logo-TTC-01_saviwg.svg"
                        width="200"
                        alt="tu-tienda" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">INICIO</Nav.Link>
                        <Nav.Link href="#link1">PRODUCTOS</Nav.Link>
                        <Nav.Link href="#link2">TIENDAS</Nav.Link>
                        <Nav.Link href="#link3">BLOG</Nav.Link>
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
        </Navbar>
    )
}

export default NavBarTienda
