import React from 'react'
import './skills.css';
import CSS from '../../assets/css3.svg'
import Figma from '../../assets/figma.svg'
import JS from '../../assets/javascript.svg'
import Mongo from '../../assets/mongodb.svg'
import Nodee from '../../assets/nodejs.svg'
import Reactt from '../../assets/react.svg'
import Taill from '../../assets/tailwindcss.svg'
import Html from '../../assets/html.svg'
import Java from '../../assets/java.svg'
import Pyhton from '../../assets/python.svg'
import MySql from '../../assets/mySql.svg'
import Exp from '../../assets/expressjs.svg'
import Ang from '../../assets/angular.svg'
import Flutter from '../../assets/flutter.svg'
import Firebase from '../../assets/firebase.svg'
import Laravel from '../../assets/laravel.svg'
import Php from '../../assets/php.svg'
import Ts from '../../assets/ts.svg'
import Wordpress from '../../assets/logos/Wordpress.svg'

// import {SiJava} from 'react-icons/si'
const SkillsData = [
    {
    id: 6,
    image: Reactt,
    title: 'React',
    disc: '',
  },
    {
    id: 8,
    image: Html,
    title: 'HTML',
    disc: '',
  },
  {
    id: 1,
    image: CSS,
    title: 'CSS',
    disc: '',
  },
    {
    id: 3,
    image: JS,
    title: 'JavaScript',
    disc: '',
  },
      {
    id: 13,
    image: Ang,
    title: 'Angular',
    disc: '',
  },
    {
    id: 18,
    image: Ts,
    title: 'TypeScript',
    disc: '',
  },

    {
    id: 5,
    image: Nodee,
    title: 'Node.js',
    disc: '',
  },
     {
    id: 19,
    image: Exp,
    title: 'Express.js',
    disc: '',
  },
    {
    id: 4,
    image: Mongo,
    title: 'MongoDB',
    disc: '',
  },
    {
    id: 11,
    image: MySql,
    title: 'MySQL',
    disc: '',
  },
    {
    id: 15,
    image: Firebase,
    title: 'Firebase',
    disc: '',
  },






 

  {
    id: 9,
    image: Java,
    title: 'Java',
    disc: '',
  },
  {
    id: 10,
    image: Pyhton,
    title: 'Python',
    disc: '',
  },



  {
    id: 14,
    image: Flutter,
    title: 'Flutter',
    disc: '',
  },

  {
    id: 16,
    image: Laravel,
    title: 'Laravel',
    disc: '',
  },
  {
    id: 17,
    image: Php,
    title: 'PHP',
    disc: '',
  },
  {
    id:18,
    image:Wordpress,
    title:'Wprdpress',
    disc:'',
  },

];



function Skills() {
  return (
    <section className="skills" id='skills'>

      <div className="top_section">
         <h5>Technologies I Use</h5>
  <h2>Skills</h2>
      </div>

      <div className="container container_skills">


        {SkillsData.map(({  image, title, disc },index) => (
          <article className='card_skill' style={{ '--i': index }}>
            <div className="icon">
              <img src={image} alt="css photo " />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className='text-light'>{disc}</p>
            </div>
          </article>
        ))}


      </div>


    </section>
  )
}

export default Skills
