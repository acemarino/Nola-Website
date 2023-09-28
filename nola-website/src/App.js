import React from 'react';
import Home from './pages/home.js';
import About from './pages/aboutMe.js';
import Timeline from './components/timeline.jsx';
import OffCanNav from './components/OffCanNav.jsx'
import './custom.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  //<Route path="/" element={<Home />}/>
  return (
    <>
    <div>
    <Router>
    <OffCanNav></OffCanNav>
   
      <Routes>
        <Route path="/" element={<Timeline />}/>
        <Route path="/aboutMe" element={<About />} />
      </Routes>
    </Router>
      
    </div>
    
    </>
  );
}

export default App;
