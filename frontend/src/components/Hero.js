import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../styles/Hero.css';

const Hero = ({ cvData }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !cvData) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    sceneRef.current = scene;

    // Create rotating cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x00d4ff, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0x0f3460, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0x533483, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0x00d4ff, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0x0f3460, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0x533483, shininess: 100 })
    ];
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00d4ff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 4;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Capture the container element for cleanup
    const containerElement = containerRef.current;

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerElement && renderer.domElement.parentNode === containerElement) {
        containerElement.removeChild(renderer.domElement);
      }
    };
  }, [cvData]);

  if (!cvData) return null;

  return (
    <section id="home" className="hero">
      <div className="hero-3d-container" ref={containerRef}></div>
      <div className="hero-content">
        <div className="hero-badge">Welcome to my portfolio</div>
        <h1 className="hero-name">{cvData.personal.name}</h1>
        <p className="hero-title">Full-Stack Developer • Cyber Security Enthusiast</p>
        <p className="hero-bio">Crafting innovative solutions with React, Node.js, and modern web technologies</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
