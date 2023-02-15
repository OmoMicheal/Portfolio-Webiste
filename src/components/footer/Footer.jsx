import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaResearchgate} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="/#" className='footer_logo'>OMOJOLA MICHEAL</a>
      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://www.facebook.com/omojola.micheal.927" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://github.com/MichealOmojola" target="_blank" rel="noreferrer"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/micheal-omojola-27658219a" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://twitter.com/omojola_micheal" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
        <a href="https://www.researchgate.net/profile/Omojola-Micheal" target="_blank" rel="noreferrer"><FaResearchgate/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Omojola Micheal. All rights reserved. </small>
      </div>

    </footer>
  )
}

export default footer