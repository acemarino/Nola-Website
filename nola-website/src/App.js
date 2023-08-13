import React from 'react';
import Home from './pages/home.js';
import Navigation from './components/navbar';
import About from './pages/aboutMe.js';
import Timeline from './components/timeline.jsx';
import NavScrollExample from './components/nav2.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <div>
    <Router>
      <Navigation/>
      <Timeline></Timeline>
      <NavScrollExample></NavScrollExample>
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
