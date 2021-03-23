import React from 'react'
import {Navbar, Nav, Container, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">ProShop
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        <Nav.Link to="/login"><i className="fas fa-user"></i>Login</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header> 
    )
}
