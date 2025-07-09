import React from 'react'
import Me from '../../assets/h3.png'
import './home.css'
import CV from '../../assets/CV.pdf'
import HomeSocials from './HomeSocials'


function Home() {
  return (
    <div className='home' id='home'>


<div className="container home_container">
  <h4>Hello I'm</h4>
  <h1>Ahmed Helmy</h1>
  <h4 className='text-light'>Software Engineer</h4>


  <div className="btns">
    <a href={CV} className='btn' download>Download CV</a>
    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
  </div>

<div className="me">
  <img src={Me}></img>
</div>


<a href="#about" className="scroll_down">Scroll Down</a>
<HomeSocials></HomeSocials>

</div>







    </div>
  )
}

export default Home
