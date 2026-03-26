# Bivash Mondal - Professional Interactive Portfolio

A modern, responsive web portfolio featuring an animated 3D hero section, built with React, Node.js, and Three.js. Showcasing professional expertise in full-stack development and cybersecurity.

## ✨ Features

- **3D Hero Section**: Stunning animated rotating cube with gradient effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Modern Design**: Professional dark theme with cyan accents and smooth animations
- **Real-time Data**: Node.js backend serving comprehensive CV information
- **Smooth Interactions**: Hover effects, transitions, and animated transitions
- **Professional Layout**: Organized sections for skills, education, and contact

## 🛠 Tech Stack

**Frontend:**
- React 18
- Three.js (3D Graphics)
- CSS3 (Animations, Gradients, Flexbox)

**Backend:**
- Node.js
- Express.js
- CORS enabled

## 📁 Project Structure

```
cv-3d-portfolio/
├── backend/
│   ├── server.js           # Express API server
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Education.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── styles/
│   │   │   ├── Header.css
│   │   │   ├── Hero.css
│   │   │   ├── About.css
│   │   │   ├── Skills.css
│   │   │   ├── Education.css
│   │   │   ├── Contact.css
│   │   │   └── Footer.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. **Install all dependencies:**
```bash
npm run install-all
```

2. **Start Backend Server** (Terminal 1):
```bash
cd backend
npm start
```
Backend runs on: `http://localhost:5000`

3. **Start Frontend Developer** (Terminal 2):
```bash
cd frontend
npm start
```
Frontend runs on: `http://localhost:3000`

## 📡 API Endpoints

- `GET /api/cv` - Complete CV data
- `GET /api/personal` - Personal information
- `GET /api/education` - Education details
- `GET /api/skills` - Technical skills
- `GET /api/languages` - Languages spoken
- `GET /api/hobbies` - Hobbies & interests

## 🎨 Design Highlights

- **Color Palette**:
  - Primary: `#00d4ff` (Cyan)
  - Dark Background: `#0a0e27`
  - Secondary: `#533483` (Purple)
  - Text: `#e0e0e0`

- **Responsive Breakpoints**:
  - Desktop: 1200px+
  - Tablet: 768px - 1199px
  - Mobile: < 768px

## 📱 Components

### Header
- Sticky navigation with mobile menu toggle
- Smooth scroll links to sections
- Animated logo

### Hero
- Full-screen 3D scene with rotating cube
- Professional headline and CTA buttons
- Responsive text sizing

### About
- Personal introduction
- Contact information display
- Professional summary

### Skills
- Categorized technical expertise
- Hover animations
- Color-coded icons

### Education
- Timeline layout
- Academic achievements
- GPA and percentage displays

### Contact
- Multiple contact methods
- Social links
- Location information

## 🔧 Troubleshooting

**Port Already in Use?**
- Edit `backend/.env` and change `PORT`
- React will prompt for alternative port

**3D Cube Not Showing?**
- Ensure WebGL is enabled in your browser
- Check browser console for errors
- Try a modern browser (Chrome, Firefox, Safari)

**Modules Not Found?**
```bash
npm cache clean --force
npm run install-all
```

## 🎯 Future Enhancements

- [ ] Dark/Light theme switcher
- [ ] Project showcase with 3D elements
- [ ] Blog section
- [ ] Contact form with email integration
- [ ] Multiple 3D models and scenes
- [ ] Particle effects and advanced animations
- [ ] Download CV as PDF

## 📞 Contact

**Bivash Mondal**
- Email: mbivash407@gmail.com
- Phone: +918116848109
- LinkedIn: linkedin.com/in/bivash-mondal-676932238
- Location: Ashoknagar, Kankpul, North 24pgs, 743272

---

**Created with React • Node.js • Three.js 🚀**
