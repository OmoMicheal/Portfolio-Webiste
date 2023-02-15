import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBookmarklet} from 'react-icons/gi'
import {RiCustomerService2Line} from 'react-icons/ri'
import {FaHeadphonesAlt} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'
import {MdPhoneInTalk} from 'react-icons/md'
import {useState} from 'react'




const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className= {activeNav==='#'?'active':''}   ><AiOutlineHome/></a>
      {/* <a href="/#" className= 'active'><AiOutlineHome/></a> */}
      <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav==='#experience'?'active':''}><GiBookmarklet/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className= {activeNav==='#services'?'active':''}><RiCustomerService2Line/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className= {activeNav==='#portfolio'?'active':''}><AiFillFolderOpen/></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className= {activeNav==='#testimonials'?'active':''}><MdPhoneInTalk/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav==='#contact'?'active':''}><FaHeadphonesAlt/></a>

    </nav>
  )
}

export default Nav