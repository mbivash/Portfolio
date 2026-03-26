import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [cvData, setCvData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch CV data from backend
    const fetchData = async () => {
      try {
        const response = await fetch('/api/cv');
        const data = await response.json();
        setCvData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching CV data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading your portfolio...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Hero cvData={cvData} />
      <About cvData={cvData} />
      <Skills cvData={cvData} />
      <Projects cvData={cvData} />
      <Education cvData={cvData} />
      <Contact cvData={cvData} />
      <Footer cvData={cvData} />
    </div>
  );
}

export default App;
