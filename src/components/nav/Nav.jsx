import React ,{useState} from 'react'
import './nav.css'

import { IoHomeOutline } from 'react-icons/io5'
import { LuUserRound } from 'react-icons/lu'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'




function Nav() {

const [activeNav ,setActiveNav]=useState("#");

  return (
   <nav>
    <a className={activeNav==='#' ? "active" : " "} onClick={()=>setActiveNav("#")} href="#"><IoHomeOutline/></a>
    <a href="#about" className={activeNav==='#about' ? "active" : " "}  onClick={()=>setActiveNav("#about")}><LuUserRound/></a>
    <a href="#projects" className={activeNav==='#projects' ? "active" : " "} onClick={()=>setActiveNav("#projects")}><BiBook/></a>
    {/* <a href="#projects"><RiServiceLine/></a> */}
    <a href="#contact"className={activeNav==='#contact' ? "active" : " "}  onClick={()=>setActiveNav("#contact")}><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav
