
import Nav from 'react-bootstrap/Nav';
import React, {Component} from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 2
    };
   this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(key) {
    this.setState({key});
  }
  render () {
    return (
    <>
    <div>
          <Nav variant="underline" activeKey={this.state.key} onSelect={this.handleSelect} 
          id="controlled-tab-example">
            <Nav.Item>
              <Nav.Link eventKey={1} title="Freshman"> Freshman </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={2} title="Sophmore"> Sophmore </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={3} title="Junior"> Junior </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={4} title="Senior"> Senior </Nav.Link>
            </Nav.Item>
          </Nav>
               
        </div>

        
   
    </>
     )
    }
   }