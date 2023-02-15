import React from 'react'
import './contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineAttachEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_21bin39', 'template_qao5523', form.current, 'c6KwZQ04oCLviAjzK')

    e.target.reset();

      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineAttachEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>omojolamicheal123@gmail.com</h5>
            <a href="mailto:omojolamicheal123@gmail.com" target = '_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Facebook Messanger</h4>
            <h5>Omojola Micheal</h5>
            <a href="https://m.me/omojola.micheal.927" target = '_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348071360499</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348071360499" target = '_blank' rel="noreferrer">Send a message</a>
          </article>


        </div>
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name = 'name' placeholder = 'Your Full Name' required/>
          <input type="email" name = 'email' placeholder = 'Your Email' required/>
          <textarea name="message" rows="7" placeholder = 'Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact