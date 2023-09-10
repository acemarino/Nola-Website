
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import React, {Component} from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { useContext } from 'react';
import { yearContext } from './yearcontext';
import Home from '../pages/home';
import Gallery from '../pages/gallery';

const YearContext = React.createContext(1);
export default class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      title: "year"
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
          id="controlled-tab-example" transition={false} variant='underline'>
                  <Tab eventKey={1} title="Freshman"> </Tab>
                  <Tab eventKey={2} title="Sophmore"> </Tab>
                  <Tab eventKey={3} title="Junior"> </Tab>
                  <Tab eventKey={4} title="Senior"> </Tab>
          </Tabs>
               
        </div>
       
        <Gallery num={this.state.key}></Gallery>
    </>
     );
    }
   }