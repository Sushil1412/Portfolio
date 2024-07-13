import React from 'react'
import './About.css'
import { GiSkills } from "react-icons/gi";
import me from "../../assets/myy.jpg"
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { FaCode } from "react-icons/fa";


const About = () => {
    return (
        <div>
            <section id="about">
                <h5>Get To Know</h5>
                <h2>About Me</h2>
                <div className='container about_container'>
                    <div className='about_me'>
                        <div className='about_me-image'>
                            <img src={me} alt="" />
                        </div>
                    </div>
                    <div className='about_content'>
                        <div className='about_cards'>

                            <article className='about_card'>

                                <GiSkills className='about_icon' />
                                <h5>Skill</h5>
                                <small></small>


                            </article>



                            <article className='about_card'>

                                <LiaProjectDiagramSolid className='about_icon' />
                                <h5>3+ projects</h5>
                                <small></small>


                            </article>




                            <article className='about_card'>

                                <FaCode className='about_icon' />
                                <h5>Coding
                                    <br />360+ Questions
                                </h5>
                                <small></small>


                            </article>
                        </div>
                        <p>
                            Hello! I'm Sushil Nayak, from odisha ,India. a passionate web developer  and Programmer with a knack for crafting seamless and engaging web experiences. With a solid foundation in front-end development and a growing interest in back-end technologies, I thrive on turning complex problems into elegant solutions.
                        </p>
                        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default About
