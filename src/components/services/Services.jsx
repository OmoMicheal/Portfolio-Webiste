import React from 'react'
import './services.css'
import {HiCheck} from 'react-icons/hi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2 className='whatIoffer'>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Quantitative Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Quantitative portfolio backtests with TradingView's PineScript and Python
                including spreads and slippages.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Futures backtest using AI4Finance machine learning Python framework.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Algorithmic trading apps and deployment with Jenkins, Docker, and Python.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Strategy generation including Momentum, Swing, Day trading, Scalping strategies,
                and much more.  </p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Parameter, cross-validation and walk-forward optimizations on trading strategies on portfolio of stocks.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Advance use of FinancialModelingPrep, Alpaca, BlueShift, Quandl, Alpha Vantage, TwelveData, TradingView, YahooFinance, Investing.com, EOD, IEX Cloud, and QuantConnect REST APIs.</p>
            </li>



          </ul>
        </article>
        {/* END OF UI/UX */}


        <article className="service">
          <div className="service_head">
            <h3>Data Science</h3>
          </div>

          <ul className="service_list">

          <li>
              <HiCheck className='service_list-icon'/>
              <p>Data visualization with Python, Tableau, and PowerPoint.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>PD, LGD, and EAD Credit risk modeling with machine learning in Python.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Data preprocessing, feature engineering and selection, trainging, testing, optimization, and scoring of machine learning models.</p>
              {/* Linting is used test semantic error.*/}
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Unit testing with Pytest, Unittest, and POSTMAN.</p>
              {/* Linting is used test semantic error. Pytest is used to test.*/}
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Code structuring and cleansing with Linting and Flake8.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Publication of modules on Pypi abd Gemfury.</p>
              {/* Linting is used test semantic error.*/}
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Continuous Integration/Continuous Delivery (CI/CD) using CircleCI, GitActions, and Jenkins.</p>
              {/* Linting is used test semantic error.*/}
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Dockerization and deployment of machine learning API on Heroku, CentOS, and AWS.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Image recognition with Machine learning.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Machine learning with libraries like Numpy, Scipy, Scikit-learn, Feature-engine, TensorFlow, Keras, PyTorch, Pandas, Matplotlib, OpenCV, and Beautiful Soup.</p>
            </li>


            <li>
              <HiCheck className='service_list-icon'/>
              <p>Programming on VM Ware, Git, Github Desktop, PyCharm, VSCode, and ATOM.</p>
            </li>




            {/*  */}


          </ul>
        </article>
        {/* END OF DATA SCIENCE */}
        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Creation of REST APIs using Django and Flask</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>CRUD application to MYSQL and PostgresQL</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>API deployment with Docker.</p>
            </li>

          {/*
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}


          </ul>
        </article>
        {/* END OF Content Creation */}


        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Frontend development with HTML, CSS, Django, PHP, an React.</p>
              {/* Learn FIGMA */}
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Deployment with Heroku and Firebase.</p>
            </li>

            {/* <li>
              <HiCheck className='service_list-icon'/>
              <p>API deployment with Docker.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}


          </ul>
        </article>
        {/* END OF Content Creation */}

      </div>
    </section>
  )
}

export default Services