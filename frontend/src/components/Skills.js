import React from 'react';
import '../styles/Skills.css';

const Skills = ({ cvData }) => {
  if (!cvData || !cvData.skills) return null;

  // Group skills by category
  const skillsByCategory = cvData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryIcons = {
    'Frontend': '🎨',
    'Backend': '⚙️',
    'Language': '💻',
    'Specialization': '🔐'
  };

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="skills-subtitle">Proficient in modern web technologies and security practices</p>
        <div className="skills-grid">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{categoryIcons[category] || '✨'}</span>
                <h3 className="category-title">{category}</h3>
              </div>
              <div className="skill-items">
                {skills.map(skill => (
                  <span key={skill.id} className="skill-badge">
                    <span className="skill-dot"></span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {cvData.languages && (
          <div className="additional-section">
            <h3 className="subsection-title">Languages</h3>
            <div className="languages-grid">
              {cvData.languages.map(lang => (
                <div key={lang.id} className="language-item">
                  <span className="language-name">{lang.language}</span>
                  <span className="language-level">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {cvData.hobbies && (
          <div className="additional-section">
            <h3 className="subsection-title">Hobbies & Interests</h3>
            <div className="hobbies-grid">
              {cvData.hobbies.map(hobby => (
                <span key={hobby.id} className="hobby-item">🎯 {hobby.hobby}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
