import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/Dammy.jpg'
import AVTR3 from '../../assets/Segun.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
  avatar: AVTR1,
  name: 'Babatunde A.',
  review: "Michael and I have been working in the same holding company for the past two years, but we only started working together on the same team in June 2022. In this short time, I have noticed that Michael is the nicest, most intelligent, and easy to work with Data Scientist I have ever met! Also, his interpersonal skills are also exceptional because of his high emotional intelligence which makes him natural at leading teams. Michael is an asset to any team he finds himself, and I'm honored to be working alongside him."
  },
  {
  avatar: AVTR2,
  name: 'Oluwadamilola Oyekan',
  review: "I have known Micheal Omojola for more than 8 years, having studied together at the Federal University of Technology, Akure, Nigeria. We both graduated as top 1% of the class. However, he was the best graduating student in the Department. He has displayed prowess from all dimensions ranging from Pure Mathematics, to its applications in Real Life and his programming skills are top notch. Also, his leadership skill is what I admire a lot. I have learnt from him and I am still learning. Great to be part of Michael Omojola's trusted professional network. It is a pleasure and an honour to recommend you to all others as a consummate and dedicated professional. Thank you for your contributions. "
  },
  {
  avatar: AVTR3,
  name: 'Segun Ofe',
  review: "I have known Micheal Omojola for over 8 years. He is outstanding in achievements, intelligent, hardworking, and committed to whatsoever his hand finds to do. We've worked together on several occasions and he has proven over and over again that he is a leader. He leads by example. Furthermore, he is very humble, corrigible, and open to new ideas. He seeks to learn and develop in whatever he does, you can count on him. In sum, he is well-rounded in mathematical and computing skills (academia) and well-cultured in manners. Thank you."

  },

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5> Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
          {
            data.map(({avatar, name, review}, index) => {
              return (
                <SwiperSlide key = {index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />

                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
              </SwiperSlide>
              )
            })
          }





      </Swiper>


    </section>

  )
}

export default Testimonials