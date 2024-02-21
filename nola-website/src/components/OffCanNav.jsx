import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React, {Component} from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Home from '../pages/home';
import { Link } from "react-router-dom";
import { extra } from '../pages/images';
import logo from "../pages/images/Other/granola_doodle_logo.png"

export default class OffCanNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      title: "year",
      show:false,
      load:false
    };
  this.handleSelect = this.handleSelect.bind(this)
  this.handleClose = this.handleClose.bind(this)
  this.handleShow = this.handleShow.bind(this)
  this.handleChange=this.handleChange.bind(this)
  }
  handleSelect(key) {
    this.setState({num: key});
    this.setState({show: false});
  }

  handleClose(show) {
    this.setState({show: false});
  }
  handleShow(show) {
    this.setState({show: true});
  }

  handleChange(load){
    this.setState((prev) => !prev);
  };

  render () {
  
  return (
    <>
    
    <Navbar expand="xs" >
      <Container fluid>
        <Nav activeKey="/home" onSelect={(this.handleSelect)} >
              <Nav.Link as={Link}  to="/" eventKey="5">
                <img src= {logo} className='Logo' alt="Granola" />
              </Nav.Link>
            
        </Nav>
          <img src={extra[5].img} alt={extra[5].Title} id='menuButton' onClick={this.handleShow} className='float-end d-lg-none'></img>
      </Container>
    </Navbar>
      
   
      <Offcanvas show={this.state.show} onHide={this.handleClose} placement='end' responsive='lg'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Nav activeKey="/home" onSelect={(this.handleSelect)}>
              <Nav.Link as={Link}  to="/" eventKey="5">
                <img src={logo} className='Logo' alt="Granola" />
              </Nav.Link>
            </Nav>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        <Nav activeKey="/home" onSelect={(this.handleSelect)}  >
              
              <Nav.Item id="botR">
                <Nav.Link as={Link} to="/" eventKey="1"  >
                  <span className='linkObj'>
                    Freshman 
                  </span>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item id="botR">
                <Nav.Link as={Link} to="/" eventKey="2" >
                  <span className='linkObj'>
                    Sophomore
                  </span>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item id="botR">
                <Nav.Link as={Link} to="/" eventKey="3" >
                  <span className='linkObj'>
                    Junior 
                  </span>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item id="botR">
                <Nav.Link as={Link} to="/" eventKey="4" >
                  <span className='linkObj'>
                    Senior
                  </span>
                </Nav.Link>
              </Nav.Item>
              
              <Nav.Item id="topR">
                <Nav.Link  as={Link} to="/aboutArtist" eventKey="6">
                  <span className='linkObj'>
                    About Me
                  </span>
                </Nav.Link>
              </Nav.Item>
             </Nav>
                
                 
        </Offcanvas.Body>
      </Offcanvas>
      <Home value= {this.state.num} />
    </>
   
  );
  
}
}
