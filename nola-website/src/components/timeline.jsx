
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import React, {Component} from 'react'
import { Tabs, Tab } from 'react-bootstrap';

import { useContext } from 'react';

import Test, {Value} from './test';

export const yearContext = React.createContext();
export default class Timeline extends Component {
//<Value value={this.state.key}/>
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      title: "year"
    };
  this.handleSelect = this.handleSelect.bind(this)
  };

  handleSelect(key) {
    this.setState({key: key});
    
  }
  
  render () {
    return (
      
    <>
    <div>
          <Tabs activeKey={this.state.key} onSelect={this.handleSelect} 
          id="controlled-tab-example" transition={false} variant='underline'>
                  <Tab eventKey={1} title="Freshman"> </Tab>
                  <Tab eventKey={2} title="Sophmore"> </Tab>
                  <Tab eventKey={3} title="Junior"> </Tab>
                  <Tab eventKey={4} title="Senior"> </Tab>
          </Tabs>
          
        </div>
       
        <Test value= {this.state.key}/>
        
    </>
     );
  }
}