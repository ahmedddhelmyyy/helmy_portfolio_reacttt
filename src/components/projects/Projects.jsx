import React from 'react'
import './projects.css';
import  { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';

register(); 

//full stack imgs
import Full1 from '../../assets/full-stack -books/login.png'
import Full2 from '../../assets/full-stack -books/landing.png'
import Full3 from '../../assets/full-stack -books/welcome.png'
import Full4 from '../../assets/full-stack -books/books.png'
import Full5 from '../../assets/full-stack -books/cart.png'
import Full6 from '../../assets/full-stack -books/payment.png'
import Full7 from '../../assets/full-stack -books/profile.png'

//ecommerce js
import E1 from '../../assets/JS - Ecommerce/home.png'
import E2 from '../../assets/JS - Ecommerce/products.png'
import E3 from '../../assets/JS - Ecommerce/cart.png'
import E4 from '../../assets/JS - Ecommerce/checkout.png'
import E5 from '../../assets/JS - Ecommerce/payment.png'
import E6 from '../../assets/JS - Ecommerce/success.png'
import E7 from '../../assets/JS - Ecommerce/orders.png'

//penneywise 
import P1 from '../../assets/Angular - expense Tracker/signin.png'
import P2 from '../../assets/Angular - expense Tracker/home.png'
import P3 from '../../assets/Angular - expense Tracker/chart.png'
import P4 from '../../assets/Angular - expense Tracker/add_expense.png'
import P5 from '../../assets/Angular - expense Tracker/ai (1).png'
import P6 from '../../assets/Angular - expense Tracker/recent.png'
import P7 from '../../assets/Angular - expense Tracker/allTransaction.png'
import P8 from '../../assets/Angular - expense Tracker/profile.jpg'
import P9 from '../../assets/Angular - expense Tracker/ai (2).png'

//Duat 
import D1 from '../../assets/Duat/mainS.png'
import D2 from '../../assets/Duat/irec.jpg'
import D3 from '../../assets/Duat/monu.png'

//skull
import S1 from '../../assets/skull/skulll.png'

//movie 
import MM1 from '../../assets/moview review/movie-reviewer.png'


const portfolioData = [
  {
    id: 1,
    title: "Full-Stack Bookstore App (Angular + Node + MongoDB)",
    images: [Full2, Full1, Full3, Full4, Full5, Full6, Full7],
    github: "",
    demo: ""
  },
  {
    id: 2,
    title: "Vanilla JS E-Commerce Website",
    images: [E1,  E3,E2, E4, E5, E6, E7],
    github: "",
    demo: "https://imaginative-paprenjak-14194a.netlify.app/"
  },
  {
    id: 3,
    title: "Pennywise – Angular Expense Tracker with AI",
    images: [P2, P1, P3, P4, P5, P6, P7, P8, P9],
    github: "",
    demo: "https://pennywise-7b083.web.app/home"
  },
  {
    id: 4,
    title: "Duat – Ancient Egypt AR Tourism App (Figma Prototype)",
    images: [D1, D2, D3],
    github: "",
    demo: ""
  },
  {
    id: 5,
    title: "Skull-Themed 3D UI Concept Website",
    images: [S1],
    github: "",
    demo: ""
  },
  {
    id: 6,
    title: "Movie Review Sentiment Classifier (NLP + Python)",
    images: [MM1],
    github: "",
    demo: ""
  }
];



function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="projects" id='projects'>
      <div className="top_section">
        <h5>Projects</h5>
        <h2>What I Built</h2>
      </div>

      <div className="container projects_container">
        {portfolioData.map(({ id, title, images, github, demo }) => (
          <article
            key={id}
            className='portfolio_item'
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="portfolio_item_img">
              <Swiper
                modules={[Autoplay]} 
                spaceBetween={10}
                slidesPerView={1}
                loop
                autoplay={hoveredId === id ? { delay: 1000, disableOnInteraction: false } : false}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={`Project ${id} Screenshot ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <h3>{title}</h3>
           <div className="portfolio_item_btns">
  {github && (
    <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
  )}
  {demo && (
    <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
  )}
</div>

          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;