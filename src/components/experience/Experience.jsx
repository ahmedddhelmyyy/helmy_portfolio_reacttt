// src/components/experience/Experience.jsx
import React from 'react';
import './experience.css';

// Import your logos (replace with actual paths)
import itiLogo from '../../assets/logos/iti.svg';
import nextAcademyLogo from '../../assets/logos/next.png';
import ebe from '../../assets/logos/ebe.jpg'
function Experience() {
  return (
    <section id="experience" className="experience_section">
      <h5>Where I've Trained</h5>
      <h2>Experience</h2>

      <div className="container experience_container">
       

 <div className="experience_card">
  <div className="experience_header">
    <img src={ebe} alt="EBE Logo" className="experience_logo" />
    <div>
      <h4>Egyptian Bureau for Engineering (EBE)</h4>
      <span className="experience_duration">Sep 2025 – present</span>
      <span className="experience_type">• Full-time</span>
    </div>
  </div>
  <p><strong>Role :</strong> Junior Backend Engineer</p>
  <p className="experience_description">
    Building and maintaining high-performance REST APIs and microservices using <strong>Go (Gin)</strong>.
    Containerize services with <strong>Docker</strong>, implement caching with <strong>Redis</strong>,
    and design efficient data models and queries in <strong>SQL</strong>. Own CI/CD on <strong>GitLab/GitHub</strong>,
    add observability (logging/metrics), and collaborate cross-functionally to deliver secure, reliable features.
  </p>
</div>

{/* //////////////////////////////////////// */}

<div className="experience_card">
  <div className="experience_header">
    <img src={itiLogo} alt="ITI Logo" className="experience_logo" />
    <div>
      <h4>Information Technology Institute (ITI)</h4>
      <span className="experience_duration">Mar 2025 – Aug 2025</span>
      <span className="experience_type">• Internship</span>
    </div>
  </div>
  <p><strong>Role :</strong> Full Stack Trainee</p>
  <p className="experience_description">
    A hands-on, product-based specialization focused on full stack web development. The program covers building responsive web applications using <strong>HTML, CSS, JavaScript, MySQL, PHP</strong>, frontend frameworks like <strong>Angular</strong> and <strong>React</strong>, and backend development with  <strong>Node.js</strong>.
  </p>
</div>

<div className="experience_card">
  <div className="experience_header">
    <img src={nextAcademyLogo} alt="Next Academy Logo" className="experience_logo" />
    <div>
      <h4>Next Academy</h4>
      <span className="experience_duration">Aug 2023 – Sep 2023</span>
      <span className="experience_type">• Internship</span>
    </div>
  </div>
  <p><strong>Role:</strong> Mobile Application Developer Intern</p>
  <p className="experience_description">
    Trained in mobile application development using <strong>Flutter</strong>. Delivered projects demonstrating <strong>UI design</strong>, <strong>UX optimization</strong>, <strong>state management</strong>, and <strong>API integration</strong>.
  </p>
</div>


      </div>
    </section>
  );
}

export default Experience;
