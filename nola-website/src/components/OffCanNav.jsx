import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Timeline from './timeline.jsx';
import Gallery from '../pages/gallery.js';

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
    <Navbar expand="xs" >
      <Container fluid>
        <LinkContainer to="/">
            <Nav.Link >
              <img src="./granola_doodle_logo.png" className='Logo' alt="Granola" />
            </Nav.Link>
        </LinkContainer>
        <Button variant="primary" onClick={handleShow} className='float-end' >
        Launch
      </Button>
        </Container>
      </Navbar>
      

      <Offcanvas show={show} onHide={handleClose} placement='end' >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>GRANOLA!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        <LinkContainer  to="/aboutMe" >
              <Nav.Link >
                <div>
                  About the Artist
                </div>
              </Nav.Link>
            </LinkContainer>
           
            <LinkContainer  to="/" >
              <Nav.Link >
                <div>
                  Home
                </div>
              </Nav.Link>
            </LinkContainer>
           
            
                <div>
                  Freshman
                  
                </div>
              
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default  OffCanNav;