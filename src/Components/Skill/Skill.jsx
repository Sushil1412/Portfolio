import React from 'react'
import './Skill.css';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaPhp } from "react-icons/fa";
const Skill = () => {
  return (
    <div>
      <section id="skill">
        <div>


        </div>
        <h5>What Skill I Have</h5>
        <h2>My Skills</h2>

        <div className='container skill_container'>
          <div className='skill_frontend'>
            <h3>Frontend Development</h3>
            <div className='skill_content'>
              <article className='skill_details'>
                < IoLogoHtml5 className='skill_details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>


              </article>

              <article className='skill_details'>
                < FaCss3Alt className='skill_details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>

                </div>

              </article>


              <article className='skill_details'>
                <  DiJavascript className='skill_details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>


              </article>

              <article className='skill_details'>
                < FaReact className='skill_details-icon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>

                </div>

              </article>

              <article className='skill_details'>
                < FaBootstrap className='skill_details-icon' />
                <div>
                  <h4>BootStrap</h4>
                  <small className='text-light'>Intermediate</small>
                </div>


              </article>



            </div>
          </div>

          {/* end of front end skill */}
          <div className='skill_backend'>


            <h3>Backend Development</h3>


            <div className='skill_content'>
              <article className='skill_details'>
                < FaNodeJs className='skill_details-icon' />
                <div>
                  <h4>Node js</h4>
                  <small className='text-light'>Intermediate</small>
                </div>


              </article>

              <article className='skill_details'>
                < SiExpress className='skill_details-icon' />
                <div>
                  <h4>Express</h4>
                  <small className='text-light'>Intermediate</small>

                </div>

              </article>


              <article className='skill_details'>
                <SiMongodb className='skill_details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                </div>


              </article>

              <article className='skill_details'>
                <  GrMysql className='skill_details-icon' />
                <div>
                  <h4>MySql</h4>
                  <small className='text-light'>Intermediate</small>

                </div>

              </article>

              <article className='skill_details'>
                <FaPhp className='skill_details-icon' />
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermediate</small>

                </div>

              </article>



            </div>


          </div>
        </div>



      </section>

    </div>
  )
}

export default Skill;
