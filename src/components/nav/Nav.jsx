import React, { useState, useEffect } from 'react';
import './nav.css';

import { IoHomeOutline } from 'react-icons/io5';
import { LuUserRound } from 'react-icons/lu';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { GiSkills } from 'react-icons/gi'; // Add this line
import { MdWorkOutline } from 'react-icons/md'; // icon for Experience
function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "#";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          current = `#${section.id}`;
        }
      });

      setActiveNav(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav>
  <a
    className={activeNav === '#' ? "active" : ""}
    href="#home"
    title="Home"
  >
    <IoHomeOutline />
  </a>

  <a
    className={activeNav === '#about' ? "active" : ""}
    href="#about"
    title="About"
  >
    <LuUserRound />
  </a>

<a
  href="#experience"
  title="Experience"
  className={activeNav === '#experience' ? 'active' : ''}
  onClick={() => setActiveNav('#experience')}
>
  <MdWorkOutline />
</a>


  <a
    className={activeNav === '#skills' ? "active" : ""}
    href="#skills"
    title="Skills"
  >
    <GiSkills />
  </a>

  <a
    className={activeNav === '#projects' ? "active" : ""}
    href="#projects"
    title="Projects"
  >
    <BiBook />
  </a>

  <a
    className={activeNav === '#contact' ? "active" : ""}
    href="#contact"
    title="Contact"
  >
    <BiMessageSquareDetail />
  </a>
</nav>


  );
}

export default Nav;
