import React from 'react';
import '../styles/About.css';

const About = ({ cvData }) => {
  if (!cvData) return null;

  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">{cvData.about}</p>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Email:</span>
                <a href={`mailto:${cvData.personal.email}`}>{cvData.personal.email}</a>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <a href={`tel:${cvData.personal.phone}`}>{cvData.personal.phone}</a>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span>{cvData.personal.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">LinkedIn:</span>
                <a href={`https://${cvData.personal.linkedin}`} target="_blank" rel="noopener noreferrer">
                  {cvData.personal.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
