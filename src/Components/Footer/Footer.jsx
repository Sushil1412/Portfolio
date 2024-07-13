import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      {/* <a href='#' className='footer_logo'></a> */}
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skill'>Skill</a></li>
        <li><a href='#project'>Project</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://instagram.com'><FaInstagram /></a>

        <a href='www.linkedin.com/in/sushil-nayak-609b2b283'>< FaLinkedin /></a>

        <a href='https://SushilNayak1412.com'><FaXTwitter /></a>
      </div>
      <div className='footer_copyrights'>
        <small>&copy; All rights reserved</small>
      </div>


    </footer>
  )
}

export default Footer
