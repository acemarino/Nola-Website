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
      key: 1,
      title: "year",
      show:false
    };
   this.handleSelect = this.handleSelect.bind(this)
   this.handleClose = this.handleClose.bind(this)
   this.handleShow = this.handleShow.bind(this)
 
  }
  handleSelect(key) {
    this.setState({key: key});
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
              <img src='./granola_doodle_logo.png' className='Logo' alt="Granola" />
            </Nav.Link>
        </LinkContainer>
        <Button variant="primary" onClick={this.handleShow} className='float-end d-lg-none' >
        Launch
      </Button>
        </Container>
      </Navbar>
      

      <Offcanvas show={this.state.show} onHide={this.handleClose} placement='end' responsive='lg'  >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>GRANOLA!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
              <Nav.Link  as={Link} to="/aboutMe" onClick={this.handleClose}>
                <div>
                  About the Artist
                </div>
              </Nav.Link>
           
              <Nav.Link as={Link}  to="/" onClick={this.handleClose}>
                <div>
                  Home
                </div>
              </Nav.Link>

      
                  <Tab.Container activeKey={this.state.key} onSelect={this.handleSelect} 
                  id="controlled-tab-example" transition={true}>
                                <Nav.Link as={Link} to="/" eventKey={1}>
                                Freshman 1
                                </Nav.Link>
                                <Nav.Link as={Link} to="/" eventKey={2}>
                                Sophmore
                                </Nav.Link>
                                <Nav.Link as={Link} to="/" eventKey={3}>
                                Junior
                                </Nav.Link>
                                <Nav.Link as={Link} to="/" eventKey={4}>
                                Senior
                                </Nav.Link>
                    <Tab.Content>
                      <Tab.Pane eventKey={1} title="Freshman"  > </Tab.Pane>
                      <Tab.Pane eventKey={2} title="Sophmore" > </Tab.Pane>
                      <Tab.Pane eventKey={3} title="Junior" ></Tab.Pane>
                      <Tab.Pane eventKey={4} title="Senior"> </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
               
                
                  <Test value= {this.state.key}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
}
