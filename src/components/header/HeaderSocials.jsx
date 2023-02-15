import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaResearchgate} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div container className = "header__socials">
        <a href="https://www.facebook.com/omojola.micheal.927" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://github.com/MichealOmojola" target="_blank" rel="noreferrer"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/micheal-omojola-27658219a" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://twitter.com/omojola_micheal" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
        <a href="https://www.researchgate.net/profile/Omojola-Micheal" target="_blank" rel="noreferrer"><FaResearchgate/></a>
    </div>
  )
}

export default HeaderSocials