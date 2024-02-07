import React from 'react';
import './HogwartNavbar.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const HogwartNavbar = () => {
  return (
    <nav className="navbar">
      
        {/* <div className="navbar-link">Home</div>
         */}<Link to="/">Home</Link>
         <Link to="/About">About</Link>
        {/* <div className="navbar-link">About</div> */}

    </nav>
  );
}


export default HogwartNavbar;
