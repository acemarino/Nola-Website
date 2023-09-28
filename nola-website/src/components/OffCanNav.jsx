import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Tabs, Tab } from 'react-bootstrap';
import Test, {Value} from './test';
import Gallery from '../pages/gallery.js';

export default class OffCanNav extends Component {

///   [show, setShow] = useState(false);
//handleClose = () => this.setShow(false);
//handleShow = () => this.setShow(true);
 
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
    this.setState({key});
    
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
        <Button variant="primary" onClick={this.handleShow} className='float-end' >
        Launch
      </Button>
        </Container>
      </Navbar>
      

      <Offcanvas show={this.state.show} onHide={this.handleClose} placement='end' >
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
    
                  <Tabs activeKey={this.state.key} onSelect={this.handleSelect} 
                  id="controlled-tab-example" transition={false} variant='underline'>
                          <Tab eventKey={1} title="Freshman"> </Tab>
                          <Tab eventKey={2} title="Sophmore"> </Tab>
                          <Tab eventKey={3} title="Junior"> </Tab>
                          <Tab eventKey={4} title="Senior"> </Tab>
                  </Tabs>
                <Test value= {this.state.key}/>
        
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
}
