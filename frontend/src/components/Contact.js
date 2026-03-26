import React from 'react';
import '../styles/Contact.css';

const Contact = ({ cvData }) => {
  if (!cvData) return null;

  const handleEmailClick = () => {
    window.location.href = `mailto:${cvData.personal.email}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>I'm always open to new opportunities and interesting projects.</p>
            <p>Feel free to reach out through any of the channels below!</p>
          </div>
          <div className="contact-methods">
            <a href={`mailto:${cvData.personal.email}`} className="contact-card email">
              <span className="contact-icon">📧</span>
              <span className="contact-label">Email</span>
              <span className="contact-value">{cvData.personal.email}</span>
            </a>
            <a href={`tel:${cvData.personal.phone}`} className="contact-card phone">
              <span className="contact-icon">📱</span>
              <span className="contact-label">Phone</span>
              <span className="contact-value">{cvData.personal.phone}</span>
            </a>
            <a href={`https://${cvData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-card linkedin">
              <span className="contact-icon">💼</span>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">Connect with me</span>
            </a>
            <div className="contact-card location">
              <span className="contact-icon">📍</span>
              <span className="contact-label">Location</span>
              <span className="contact-value">{cvData.personal.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
