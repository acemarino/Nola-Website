import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

export default function TopNav() {
  return (
    <Navbar expand="lg" >
      <Container fluid>
      <LinkContainer to="/">
        <Navbar.Brand >
        <img src="./granola_doodle_logo.png" alt="bug" height={100} />
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0  ms-auto"  
            
          >
            
            <LinkContainer  to="/aboutMe" >
            <Nav.Link >
            <div className='About'></div>
            </Nav.Link>
            </LinkContainer>
           
            <LinkContainer  to="/" >
            <Nav.Link >
            <div className='Home'></div>
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
