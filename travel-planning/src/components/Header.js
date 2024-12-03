import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
      <img 
  src="assets/logo.png" 
  alt="Travel Sri Lanka" 
  className="logo" 
  style={{ width: '200px', height: 'auto' }} 
/>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/hotels" className="nav-link">Hotels</Link>
        <Link to="/map" className="nav-link">Map</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
      </nav>
 
      {/* User Icon */}
      <div className="user-icon">
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
    </header>
  );
};

export default Header;
