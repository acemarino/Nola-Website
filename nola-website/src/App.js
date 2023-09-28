import React, {Component} from 'react'
import Home from './pages/home.js';
import About from './pages/aboutMe.js';
import Timeline from './components/timeline.jsx';
import { Tabs, Tab } from 'react-bootstrap';
import Test, {Value} from './components/test';
import OffCanNav from './components/OffCanNav.jsx'
import './custom.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  //<Route path="/" element={<Home />}/>
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
  render(){
  return (
    <>
    <div>
    
    <Router>
    <OffCanNav></OffCanNav>
     
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
        
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutMe" element={<About />} />
      </Routes>
    </Router>
      
    </div>
    
    </>
  );
}
}


