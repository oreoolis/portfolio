import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import logo from "../img/icon.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="p-2 navBarCustom" style = {{ boxShadow: '1px 1px 12px #000000'}}>
                <Navbar.Brand>
                  {' '}
                  <Link className="ms-auto text-decoration-none text-light" to="/home">
                    <Container>
                      <Row>
                        <Col xs={2}><img src = {logo} width = "40" height = "40" className = "d-inline-block align-top" alt = "Icon"/></Col>
                        <Col xs={4}><h1 className = "brandName">Dwayne Arnold Otero</h1></Col>
                      </Row>
                    </Container>

                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link>
                      {' '}
                      <Link className="text-decoration-none text-light" to="/employment">
                        Employment History
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      {' '}
                      <Link className="text-decoration-none text-light" to="/projects">
                        Projects
                      </Link>
                    </Nav.Link>
                    <NavDropdown title="Achievements" id="navbarScrollingDropdown" className="text-white">
                    <Nav.Link>
                        <Link className="bold text-decoration-none text-dark" to = '/education'>
                          Education
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link className="text-decoration-none text-dark" to = '/courses'>
                          Courses
                        </Link>
                      </Nav.Link>
                  </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
          </Navbar>
        );
    }
}