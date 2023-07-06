
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>Granola</Navbar.Brand>
        </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/pages/aboutMe">
                  <Nav.Link>About Me </Nav.Link>
                </LinkContainer>
              </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }