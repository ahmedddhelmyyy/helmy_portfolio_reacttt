import React, { useState, useEffect } from 'react';
import './projects.css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';
register();

// Image imports
import Full1 from '../../assets/full-stack -books/login.png';
import Full2 from '../../assets/full-stack -books/landing.png';
import Full3 from '../../assets/full-stack -books/welcome.png';
import Full4 from '../../assets/full-stack -books/books.png';
import Full5 from '../../assets/full-stack -books/cart.png';
import Full6 from '../../assets/full-stack -books/payment.png';
import Full7 from '../../assets/full-stack -books/profile.png';

import E1 from '../../assets/JS - Ecommerce/home.png';
import E2 from '../../assets/JS - Ecommerce/products.png';
import E3 from '../../assets/JS - Ecommerce/cart.png';
import E4 from '../../assets/JS - Ecommerce/checkout.png';
import E5 from '../../assets/JS - Ecommerce/payment.png';
import E6 from '../../assets/JS - Ecommerce/success.png';
import E7 from '../../assets/JS - Ecommerce/orders.png';

import P1 from '../../assets/Angular - expense Tracker/signin.png';
import P2 from '../../assets/Angular - expense Tracker/home.png';
import P3 from '../../assets/Angular - expense Tracker/chart.png';
import P4 from '../../assets/Angular - expense Tracker/add_expense.png';
import P5 from '../../assets/Angular - expense Tracker/ai (1).png';
import P6 from '../../assets/Angular - expense Tracker/recent.png';
import P7 from '../../assets/Angular - expense Tracker/allTransaction.png';
import P8 from '../../assets/Angular - expense Tracker/profile.jpg';
import P9 from '../../assets/Angular - expense Tracker/ai (2).png';

import D1 from '../../assets/Duat/mainS.png';
import D2 from '../../assets/Duat/irec.jpg';
import D3 from '../../assets/Duat/monu.png';

import S1 from '../../assets/skull/skulll.png';
import MM1 from '../../assets/moview review/movie-reviewer.png';

const portfolioData = [
  {
    id: 1,
    title: 'Full-Stack Bookstore App',
    images: [Full2, Full1, Full3, Full4, Full5, Full6, Full7],
    tools: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
    description: 'A full-featured bookstore web app with authentication, cart system, payment, and user dashboard.',
    github: '',
    demo: ''
  },
    {
    id: 2,
    title: 'Pennywise – Expense Tracker with AI',
    images: [P2, P1, P3, P4, P5, P6, P7, P8, P9],
    tools: ['Angular', 'Firebase', 'Cohere AI API'],
    description: 'Track your expenses and gain insights with AI-powered charting and smart recommendations.',
    github: 'https://github.com/ahmedddhelmyyy/Expense-Tracker-with-Ai',
    demo: 'https://pennywise-7b083.web.app/home'
  },
  {
    id: 3,
    title: 'Vanilla JS E-Commerce Website',
    images: [E1, E3, E2, E4, E5, E6, E7],
    tools: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    description: 'A static e-commerce site built using Vanilla JS and Firebase for order processing and hosting.',
    github: '',
    demo: ''
  },

  {
    id: 4,
    title: 'Duat – AR Tourism App',
    images: [D1, D2, D3],
    tools: ['Flutter', 'Dart', 'TensorFlow Lite', 'Keras', 'Python', 'Firebase'],
    description: 'An augmented reality mobile app guiding tourists through Ancient Egypt’s monuments with AI.',
    github: '',
    demo: ''
  },
  {
    id: 5,
    title: 'Skull-Themed 3D UI Website',
    images: [S1],
    tools: ['Three.js', 'GSAP', 'HTML/CSS/JS'],
    description: 'A creative 3D animated concept site showcasing interactive visuals using WebGL and animation.',
    github: '',
    demo: ''
  },
  {
    id: 6,
    title: 'Movie Review Sentiment Classifier',
    images: [MM1],
    tools: ['Python', 'NLTK', 'scikit-learn', 'Pandas', 'Jupyter'],
    description: 'A sentiment analysis tool for movie reviews using natural language processing techniques.',
    github: '',
    demo: ''
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      const navbar = document.querySelector('.navbar');
      if (navbar) navbar.style.display = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      const navbar = document.querySelector('.navbar');
      if (navbar) navbar.style.display = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      const navbar = document.querySelector('.navbar');
      if (navbar) navbar.style.display = '';
    };
  }, [selectedProject]);

  return (
    <section className="projects" id="projects">
      <div className="top_section">
        <h5>Projects</h5>
        <h2>My Work</h2>
      </div>

      <div className="container projects_container">
        {portfolioData.map((project) => (
          <article
            key={project.id}
            className="portfolio_item"
            onClick={() => setSelectedProject(project)}
          >
            <div className="portfolio_item_img">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop
                autoplay={{ delay: 2000, disableOnInteraction: false }}
              >
                {project.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={`Project ${project.id} Screenshot ${index + 1}`} className="modal-image" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <h3>{project.title}</h3>
            <div className="portfolio_item_btns">
              {project.github && (
                <a href={project.github} className="btn" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
            <h2>{selectedProject.title}</h2>
            <p className="project_description">{selectedProject.description}</p>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              {selectedProject.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Slide ${i + 1}`}
                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="tools_used">
              {selectedProject.tools.map((tool, index) => (
                <span key={index} className="tool_icon">{tool}</span>
              ))}
            </div>

            <div className="portfolio_item_btns">
              {selectedProject.github && (
                <a href={selectedProject.github} className="btn" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {selectedProject.demo && (
                <a href={selectedProject.demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
