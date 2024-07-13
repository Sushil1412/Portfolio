import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegUser } from "react-icons/fa";
import { BiBook } from 'react-icons/bi';
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');



  return (
    <div>
      <nav>
        <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaRegUser /></a>
        <a href='#skill' onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''} ><BiBook /></a>
        <a href='#project' onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''} ><LiaProjectDiagramSolid /></a>
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareDetail /></a>
      </nav>
    </div>
  )
}

export default Nav
