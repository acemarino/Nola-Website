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
  /*
   
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutMe" element={<About />} />
      </Routes>
    </Router>   
      
*/
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      title: "year"
    };
   //this.handleSelect = this.handleSelect.bind(this);
   
  }
  handleSelect(key) {
    this.setState({key});
    console.log("App.js handleSelect")
  }
  render(){
  return (
    <>
    <div>
  

    <OffCanNav></OffCanNav>
      
      
    </div>
    
    </>
  );
}
}


