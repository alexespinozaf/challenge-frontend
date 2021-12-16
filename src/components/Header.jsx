import React from 'react'
import logo from '../logo.svg';
import { Navbar,Container,Nav } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/"  to="/">Usuarios</Nav.Link>
                    <Nav.Link href="company"  to="/company">Compañias</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;