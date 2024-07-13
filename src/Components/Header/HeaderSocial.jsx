import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <a href='https://linkedin.com/in/sushil-nayak-609b2b283' target="_blank"><FaLinkedin />
            </a>
            <a href='https://github.com/Sushil1412' target="_blank"><IoLogoGithub /></a>
            <a href='https://www.instagram.com/name_is_sushil/?next=%2F' target="_blank"><FaInstagram /></a>
        </div>
    )
}

export default HeaderSocial
