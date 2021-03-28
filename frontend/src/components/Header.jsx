import React from 'react'
import {Navbar, Nav, Container, Row } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

/**
 * Get Boilder plate code for Header navbar from https://react-bootstrap.github.io/components/navbar/
 * 
 * Need Link Container to wrap a boostrap element inside of a Link Container to make it behave like a react router link
 * @returns 
 */
export default function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >Varsh</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
