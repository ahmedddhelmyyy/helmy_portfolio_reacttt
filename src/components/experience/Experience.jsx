// src/components/experience/Experience.jsx
import React from 'react';
import './experience.css';

// Import your logos (replace with actual paths)
import itiLogo from '../../assets/logos/iti.svg';
import nextAcademyLogo from '../../assets/logos/next.png';

function Experience() {
  return (
    <section id="experience" className="experience_section">
      <h5>Where I've Trained</h5>
      <h2>Experience</h2>

      <div className="container experience_container">
        
        <div className="experience_card">
          <div className="experience_header">
            <img src={itiLogo} alt="ITI Logo" className="experience_logo" />
            <div>
              <h4>Information Technology Institute (iti) </h4>
              <span className="experience_duration">Mar 2025 – Aug 2025</span>
            </div>
          </div>
          <p><strong>Role :</strong> Full Stack Trainee</p>
          <p className="experience_description">
            A hands-on, product-based specialization focused on full stack web development. The program covers building responsive web applications using <strong>HTML, CSS, JavaScript, MySQL, PHP</strong>, frontend frameworks like <strong>Angular</strong> and <strong>React</strong>, and backend development with <strong>Laravel</strong> and <strong>Node.js</strong>.
          </p>
        </div>

        <div className="experience_card">
          <div className="experience_header">
            <img src={nextAcademyLogo} alt="Next Academy Logo" className="experience_logo" />
            <div>
              <h4>Next Academy</h4>
              <span className="experience_duration">Aug 2023 – Sep 2023</span>
            </div>
          </div>
          <p><strong>Role:</strong> Mobile Application Developer Intern</p>
          <p className="experience_description">
            Trained in mobile application development using <strong>Flutter</strong> and its tools. Delivered projects demonstrating expertise in <strong>UI design</strong>, <strong>UX optimization</strong>, <strong>state management</strong>, and <strong>API integration</strong>. Gained hands-on experience in designing and developing mobile applications.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;
