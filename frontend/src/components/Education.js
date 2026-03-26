import React, { useState } from 'react';
import '../styles/Education.css';

const Education = ({ cvData }) => {
  const [expandedId, setExpandedId] = useState(null);

  if (!cvData || !cvData.education) return null;

  return (
    <section id="education" className="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {cvData.education.map((edu) => (
            <div 
              key={edu.id} 
              className="education-item"
              onClick={() => setExpandedId(expandedId === edu.id ? null : edu.id)}
            >
              <div className="timeline-dot"></div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-meta">
                  <span className="education-year">📅 {edu.year}</span>
                  <span className="education-score">{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
