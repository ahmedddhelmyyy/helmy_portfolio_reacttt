import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaDribbble } from 'react-icons/fa'

function HomeSocials() {
  return (
    <div className='home_socials'>
        <a href="https://www.linkedin.com/in/ahmed-helmyyy" target="_blank"><FaLinkedin></FaLinkedin></a>
        <a href="https://github.com/ahmedddhelmyyy" target="_blank"><FaGithub></FaGithub></a>
        {/* <a href="#" target="_blank"> <FaDribbble></FaDribbble></a> */}
      
    </div>
  )
}

export default HomeSocials
