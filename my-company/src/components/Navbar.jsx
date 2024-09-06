import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{
      backgroundColor: '#9df9ef',
      padding: '10px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'End',
      alignItems: 'center',
      gap: '10px'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>About</Link>
      <Link to="/services" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Services</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Contact</Link>
    </div>
  );
}

export default Navbar;