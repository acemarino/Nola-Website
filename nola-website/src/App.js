import React from 'react';
import Home from './pages/home.js';
import Navigation from './components/navbar';
import About from './pages/aboutMe.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <div>
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  exact path="/aboutMe" element={<About />}/>
        
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
