import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'
import ME from '../../assets/DSC_1377 copy.png'

const About = () => {
  return (
    <section id="about" className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <img className = 'picture' src={ME} alt="About"/>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Experience</h5>
                <small>2+ Years Working Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon"/>
                <h5>Projects</h5>
                <small>10+ Completed Projects</small>
            </article>
          </div>

          </div>

          <div className="para">
            <p>
              Micheal is the founder of a tech start-up called Data Intelliscence, bringing up a team of Data Scientists. With a masters degree in Pure and Applied Mathematics with programming experience of 5+ years and currently a CFA Level One Candidate, Micheal looks forward to solving complex problems with his mathematics and programming skills.
              Being the best Nigerian student mathematician and a gold medalist with 9 original international papers in areas such as functional analysis, combinatorics, numerical analysis and fluid dynamics, he remains passionate and enthusiastic about providing great solutions to the present-day problems.
              He has served has a programming instructor, Quant lead, and currently a Data Scientist and Developer. He is also a developer with knowledge in Python, PineScript, SQL, ReactJS, PHP, Tableau, MATLAB, and MATHEMATICA.
            </p>
          </div>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>




      </div>
    </section>
  )
}

export default About