import React from 'react';
import '../styles/Footer.css';

const Footer = ({ cvData }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <p className="footer-credit">&copy; {currentYear} {cvData?.personal?.name}. All rights reserved.</p>
          <p className="footer-tech">Crafted with React • Node.js • Three.js & 💙</p>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-links">
          <a href={`mailto:${cvData?.personal?.email}`}>Email</a>
          <a href={`https://${cvData?.personal?.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`tel:${cvData?.personal?.phone}`}>Call</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
