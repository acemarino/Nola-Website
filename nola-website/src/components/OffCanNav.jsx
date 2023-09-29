import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Tab} from 'react-bootstrap';
import Test from './test';
import Home from '../pages/home';
import { Link } from "react-router-dom";

export default class OffCanNav extends Component {

///   [show, setShow] = useState(false);
//handleClose = () => this.setShow(false);
//handleShow = () => this.setShow(true);
/*      <Tab eventKey={2} title="Sophmore"> </Tab>
                          <Tab eventKey={3} title="Junior" > </Tab>
                          <Tab eventKey={4} title="Senior"> </Tab>
                          */
 
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      title: "year",
      show:false
    };
   this.handleSelect = this.handleSelect.bind(this)
   this.handleClose = this.handleClose.bind(this)
   this.handleShow = this.handleShow.bind(this)
 
  }
  handleSelect(key) {
    console.log(key);
    this.setState({num: key});
    this.setState({show: false});
  }

  handleClose(show) {
    this.setState({show: false});
  }
  handleShow(show) {
    this.setState({show: true});
  }
  

  render () {
    
  return (
    <>
    
    <Navbar expand="xs" >
      <Container fluid>
        <Nav activeKey="/home" onSelect={(this.handleSelect)}>
              <Nav.Link as={Link}  to="/" eventKey="5">
                <img src='./granola_doodle_logo.png' className='Logo' alt="Granola" />
              </Nav.Link>
            <Button variant="primary" onClick={this.handleShow} className='float-end d-lg-none' >
            Launch
            </Button>
        </Nav>
      </Container>
    </Navbar>
      

      <Offcanvas show={this.state.show} onHide={this.handleClose} placement='end' responsive='lg'  >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>GRANOLA!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        <Nav activeKey="/home" onSelect={(this.handleSelect)}>
              <Nav.Link  as={Link} to="/aboutArtist" eventKey="6">
                <div>
                  About the Artist
                </div>
              </Nav.Link>
           
              <Nav.Link as={Link}  to="/" eventKey="5">
                <div>
                  Home
                </div>
              </Nav.Link>
              <Nav.Item>
                <Nav.Link as={Link} to="/" eventKey="1" >
                  <div>
                    Freshman 
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/" eventKey="2" >
                  <div>
                    Sophmore
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/" eventKey="3" >
                  <div>
                    Junior 
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/" eventKey="4" >
                  <div>
                    Senior
                  </div>
                </Nav.Link>
              </Nav.Item>
             </Nav>
                
                 
        </Offcanvas.Body>
      </Offcanvas>
      <Home value= {this.state.num}/>
    </>
   
  );
  
}
}
