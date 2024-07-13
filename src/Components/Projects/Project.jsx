import React from 'react'
import p1 from '../../assets/project1.png'
import p2 from '../../assets/project2.png'
import p3 from '../../assets/project3.png'
import './Project.css'
const Project = () => {
  return (
    <div>
      <section id="project">

        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className='container project_container'>
          <article className='project_item'>

            <div className='project_item-image'>
              <img src={p1} alt='project1' />
            </div>
            <h3>CryptoCurrency Tracker</h3>
            <div className='project_item-cta'>
              <a href='https://github.com/Sushil1412/cryptoplace-react.git' className='btn'>Github</a>
              <a href='https://cryptomarket1.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

          </article>

          <article className='project_item'>

            <div className='project_item-image'>
              <img src={p2} alt='project1' />
            </div>
            <h3>Online QuizeApp</h3>
            <div className='project_item-cta'>
              <a href='https://github.com/Sushil1412/QuizeApp' className='btn'>Github</a>
              <a href='https://quize-1.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

          </article>




          <article className='project_item'>

            <div className='project_item-image'>
              <img src={p3} alt='project1' />
            </div>
            <h3>Portfolio</h3>
            <div className='project_item-cta'>
              <a href='https://github.com/Sushil1412/Portfolio' className='btn'>Github</a>
              <a href='https://myportfolio1412.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

          </article>



          {/* 
          <article className='project_item'>

            <div className='project_item-image'>
              <img src={p1} alt='project1' />
            </div>
            <h3>this is title of project</h3>
            <div className='project_item-cta'>
              <a href='http://github.com' className='btn'>Github</a>
              <a href='http://google.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

          </article> */}




        </div>

      </section>

    </div>
  )
}

export default Project
