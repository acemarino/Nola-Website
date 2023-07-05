import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './pages/aboutMe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/aboutMe' component={About} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
