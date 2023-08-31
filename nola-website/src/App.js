import React from 'react';
import Home from './pages/home.js';

import About from './pages/aboutMe.js';
import Timeline from './components/timeline.jsx';
import TopNav from './components/topNav.jsx';
import OffCanNav from './components/OffCanNav.jsx'
import './custom.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <div>
    <Router>
      <OffCanNav></OffCanNav>
      <Timeline></Timeline>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutMe" element={<About />} />
      </Routes>
    </Router>
    
    </div>
    
    </>
  );
}

export default App;
