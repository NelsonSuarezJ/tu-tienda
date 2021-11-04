import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap'

const NavBarTienda = () => {
    return (
        <Navbar bg="success" expand="lg" variant="dark">
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
                        <Nav.Link href="#link">PRODUCTOS</Nav.Link>
                        <Nav.Link href="#link">TIENDAS</Nav.Link>
                        <Nav.Link href="#link">BLOG</Nav.Link>
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
