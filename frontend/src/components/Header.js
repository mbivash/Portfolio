import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">BIVASH MONDAL</span>
        </div>
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
