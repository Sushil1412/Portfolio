import React from 'react'
import CTA from './CTA'
import me from "../../assets/me.jpg"
import HeaderSocial from './HeaderSocial'
import './Header.css'
const Header = () => {
    return (
        <header>
            <div className='container header_container'>
                <h5>Hello I'm</h5>
                <h1>Sushil Nayak</h1>
                <h5 className='text-light'>FullStack Developer</h5>
                <CTA />
                <HeaderSocial />
                <div className='me'>
                    <img src={me} />
                </div>

                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
