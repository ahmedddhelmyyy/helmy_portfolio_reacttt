import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
<a href="" className="footer_logo">Ahmed Helmy</a>
<ul className="permalinks">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href='#experience'>Experience</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
  
</ul>

<div className="footer_socials">
  <a href="https://www.linkedin.com/in/ahmed-helmyyy" target="_blank"><FaLinkedin></FaLinkedin></a>
          <a href="https://github.com/ahmedddhelmyyy" target="_blank"><FaGithub></FaGithub></a>
          
</div>


<div className="footer_copyright">
  <small>&copy; <a href="#">Ahmed Helmy</a> All rights reserved</small>
</div>

    </footer>
  )
}

export default Footer
