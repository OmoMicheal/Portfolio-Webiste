import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/credit-risk-app.PNG'
import IMG2 from '../../assets/recipe.jpg'
import IMG3 from '../../assets/algo.jpg'
import IMG4 from '../../assets/tradingdates.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
          {
            id: 1,
            image: IMG1,
            title: 'Credit Risk Loan Feasibility App',
            github: 'https://github.com/MichealOmojola/DjangoDeploy.git',
            demo: 'https://page-machine-learning-app.herokuapp.com'
          },
          {
            id: 2,
            image: IMG2,
            title: 'Recipe App API',
            github: 'https://github.com/MichealOmojola/recipe-app-api',
            demo: ''
            // demo: 'https://500px.com/photo/1034362205/young-professional-programmer-working-at-developing-programming-by-georgeta-olaru'
          },
          {
            id: 3,
            image: IMG4,
            title: 'Trading dates generator in Python',
            github: 'https://github.com/OmoMicheal/marketanalysis',
            demo: ''
          },
          {
            id: 4,
            image: IMG3,
            title: 'Machine learning algorithm for trading',
            github: 'https://github.com/OmoMicheal/machine_learning_algo',
            demo: ''
          },
          {
            id: 5,
            image: IMG5,
            title: 'Charts templates & infographics in Figma',
            github: 'https://github.com/MichealOmojola',
            demo: 'https://500px.com/photo/1034362205/young-professional-programmer-working-at-developing-programming-by-georgeta-olaru'
          },
          {
            id: 6,
            image: IMG6,
            title: 'Charts templates & infographics in Figma',
            github: 'https://github.com/MichealOmojola',
            demo: 'https://500px.com/photo/1034362205/young-professional-programmer-working-at-developing-programming-by-georgeta-olaru'
          },
        ]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
             <div className="portfolio_item-image">
                <img src={image} alt={title} width="100%" height="100%"/>
              </div>
              <h3 className='titlee'>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target = '_blank' rel="noreferrer">Github</a>
              <a href={demo} className='btn btn-primary' target = '_blank' rel="noreferrer">Live Demo</a>
              </div>
          </article>
          )
        })
      }





      </div>
    </section>
  )
}

export default Portfolio