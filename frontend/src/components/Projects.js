import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = ({ cvData }) => {
  const [activeCategory, setActiveCategory] = useState('web');

  // Sample projects data
  const projects = {
    web: [
      {
        id: 1,
        title: '3D Portfolio Website',
        description: 'Interactive portfolio with Three.js 3D graphics, React frontend, and Node.js backend API.',
        technologies: ['React', 'Three.js', 'Node.js', 'Express', 'CSS3'],
        link: '#',
        image: '🌐'
      },
      {
        id: 2,
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with user authentication, product management, and payment integration.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: '#',
        image: '🛒'
      },
      {
        id: 3,
        title: 'Real-time Chat Application',
        description: 'Chat application with WebSocket support for real-time messaging and user presence.',
        technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
        link: '#',
        image: '💬'
      }
    ],
    cybersecurity: [
      {
        id: 1,
        title: 'GhostRecon',
        description: 'Advanced cybersecurity reconnaissance and exploitation framework for ethical penetration testing.',
        technologies: ['Python', 'Bash', 'Linux', 'Security'],
        link: 'https://ghostrecon-gold.vercel.app/',
        image: '👻'
      }
    ]
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Explore my work across different domains</p>

        <div className="projects-tabs">
          <button
            className={`tab-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            🌐 Web Development
          </button>
          <button
            className={`tab-btn ${activeCategory === 'cybersecurity' ? 'active' : ''}`}
            onClick={() => setActiveCategory('cybersecurity')}
          >
            🔒 Cyber Security
          </button>
        </div>

        <div className="projects-grid">
          {projects[activeCategory].map(project => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
