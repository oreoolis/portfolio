import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './component-css/navbar.css';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="navBar">
      <Container >
        <Navbar.Brand>
            <Link className='text-Main'to = '/portfolio'>
                Dwayne Arnold Otero
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link>
                <Link className='text-link' to ='/education'>
                Education
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='text-link' to ='/employment'>
                Employment
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='text-link' to ='/projects'>
                Projects
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='text-link' to ='/courses'>
                Courses
                </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;