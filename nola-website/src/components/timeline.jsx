
import Nav from 'react-bootstrap/Nav';
import React, {Component} from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

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
          <Tabs activeKey={this.state.key} onSelect={this.handleSelect} 
          id="controlled-tab-example">
                  <Tab eventKey={1} title="Freshman"> Freshman </Tab>
                  <Tab eventKey={2} title="Sophmore"> Sophmore </Tab>
                  <Tab eventKey={3} title="Junior"> Junior </Tab>
                  <Tab eventKey={4} title="Senior"> Senior </Tab>
          </Tabs>
               
        </div>

        
   
    </>
     )
    }
   }