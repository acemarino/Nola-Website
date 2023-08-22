import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

export default function TopNav() {
  return (
    <Navbar expand="lg" >
      <Container fluid>
      <LinkContainer to="/">
        <Nav.Link className='logoCont'>
        <img src="./granola_doodle_logo.png" className='Logo' alt="Granola" />
        </Nav.Link>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" ms-auto"  >
            <LinkContainer  to="/aboutMe" >
            <Nav.Link >
            <div >
            <img src="./about_button.png" alt="about" className='About' />
            </div>
            </Nav.Link>
            </LinkContainer>
           
            <LinkContainer  to="/" >
            <Nav.Link >
            <div>
            <img src="./home_button.png" alt="home" className='Home' />
            </div>
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
