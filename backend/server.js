const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// CV Data
const cvData = {
  personal: {
    name: "BIVASH MONDAL",
    email: "mbivash407@gmail.com",
    phone: "+918116848109",
    location: "Ashoknagar, Kankpul, North 24pgs, 743272",
    dob: "2001-06-28",
    linkedin: "linkedin.com/in/bivash-mondal-676932238"
  },
  about: "IT Professional and Web Developer with proven experience designing, coding, and deploying modern web applications. Expert in front-end UI/UX, back-end REST APIs, and full-stack system integration with strong emphasis on performance, security, and maintainability. Passionate about solving real-world problems through software, automation, and continuous improvement.",
  education: [
    {
      id: 1,
      degree: "Master of Computer Applications",
      institution: "Meghnad Saha Institute Of Technology",
      year: "2025",
      score: "C.G.P.A: 7.87"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications",
      institution: "Brainware University",
      year: "2023",
      score: "CGPA: 9.05 (83.80%)"
    },
    {
      id: 3,
      degree: "Higher Secondary",
      institution: "W.B.C.H.S.E",
      year: "2019",
      score: "67.40%"
    },
    {
      id: 4,
      degree: "Secondary",
      institution: "W.B.B.S.E",
      year: "2017",
      score: "70.85%"
    }
  ],
  skills: [
    { id: 1, name: "React.js", category: "Frontend" },
    { id: 2, name: "JavaScript", category: "Language" },
    { id: 3, name: "Node.js", category: "Backend" },
    { id: 4, name: "Cyber Security", category: "Specialization" },
    { id: 5, name: "Java", category: "Language" },
    { id: 6, name: "C", category: "Language" },
    { id: 7, name: "Python", category: "Language" }
  ],
  languages: [
    { id: 1, language: "Bengali", proficiency: "Native" },
    { id: 2, language: "English", proficiency: "Fluent" },
    { id: 3, language: "Hindi", proficiency: "Fluent" }
  ],
  hobbies: [
    { id: 1, hobby: "Cyber Security" },
    { id: 2, hobby: "Cricket" },
    { id: 3, hobby: "Movies" }
  ]
};

// Routes
app.get('/api/cv', (req, res) => {
  res.json(cvData);
});

app.get('/api/personal', (req, res) => {
  res.json(cvData.personal);
});

app.get('/api/education', (req, res) => {
  res.json(cvData.education);
});

app.get('/api/skills', (req, res) => {
  res.json(cvData.skills);
});

app.get('/api/languages', (req, res) => {
  res.json(cvData.languages);
});

app.get('/api/hobbies', (req, res) => {
  res.json(cvData.hobbies);
});

app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
