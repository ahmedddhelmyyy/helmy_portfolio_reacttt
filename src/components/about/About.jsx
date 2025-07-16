import React from 'react'
import './about.css';
import IMageMe from '../../assets/me1.png'
import {FaAward} from 'react-icons/fa'
import { FaUser } from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
  <section className="about" id="about">
    
    <div className="top_section">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    </div>

<div className="container about_container">
  <div className="about_me">
    <div className="about_me_image">
<img src={IMageMe} alt="about Photo" />
    </div>
</div>

<div className="about_content">
  <div className="about_cards">

    <div className="about_card">
      <FaAward className='about_icon'/>
      <h5>Experience</h5>
    <small>+2 years Working</small>
    </div>


 <div className="about_card">
      <FaUser className='about_icon'/>
      <h5>Clients</h5>
    <small>+10 Worledwide</small>
    </div>


     <div className="about_card">
      <VscFolderLibrary className='about_icon'/>
      <h5>Projects</h5>
    <small>+20 completed </small>
    </div>



  </div>


<p>I'm a software engineer with a degree in Computer Science from Future University in Egypt. I specialize in full-stack web and mobile app development, using tools like React, Angular, Node.js, Flutter, and Laravel.

I trained at the Information Technology Institute (ITI) and interned at Next Academy, where I worked on real-world projects and improved my skills in UI/UX, APIs, and database integration.</p>

<a href='#contact' className='btn btn-primary'>Let's Talk !</a>
{/* ss */}
</div>




</div>
</section>
  )
}

export default About
