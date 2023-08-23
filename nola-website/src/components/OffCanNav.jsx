import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function OffCanNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <style type="text/css">
        {`
    .offcanvas-horizontal-width {
      width:100%;
    }
    `}
      </style>
    <Navbar expand="lg" >
      <Container fluid>
        <LinkContainer to="/">
            <Nav.Link className='logoCont'>
              <img src="./granola_doodle_logo.png" className='Logo' alt="Granola" />
            </Nav.Link>
        </LinkContainer>
        </Container>
      </Navbar>
      <Button variant="primary" onClick={handleShow} className='ms-auto' >
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end' responsive='sm' offcanvas-horizontal-width='100px'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Site Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        <LinkContainer  to="/aboutMe" >
              <Nav.Link >
                <div>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default  OffCanNav;