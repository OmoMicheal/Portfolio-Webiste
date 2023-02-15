import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.png'
import ME from '../../assets/DSC_1378 copy.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello, I'm</h2>
        <h1 className = 'myname'>Micheal Omojola</h1>
        <h1 className="textlight">Data Scientist, Quantitative Developer, & Software Engineer</h1>
        <CTA/>
        <HeaderSocials/>

        {/* <img className="me" src={ME} alt="me"  width="400" height="650"/> */}

        <div className="me">
          <img
            src={ME}
            alt="me"
            width="100%"
            height="600"
          />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>


      </div>
    </header>
  )
}

export default header