import React from 'react'
import './About.css'
import { aboutapi } from './AboutAPI'
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className='about'>
     <Helmet>
      <title>About</title>
      <meta name='description'content="This is About page"  />
     </Helmet>
      <div className="row1">
        <h2>About Us – India’s Leading Bike Rentals and Two Wheeler Platform</h2>
        <p>
          At Royal Brothers, we believe everyone should have access to mobility.
          A simple solution to the most complex challenges of the world.
        </p>
      </div>
      <div className="row2">
        <p>We are a bunch of millennials focused on building India’s largest mobility solutions provider. Our focus has led us to build a platform providing rentals spanning across 14 states, 43 cities and 3 international cities.</p>
        <p>Transportation and mobility solutions is one of the least understood and most unorganized markets. We see this as an unexplored opportunity to build a system that can be trusted by everyone beyond barriers.</p>
        <p>We have no limitations when it comes to two wheelers and enjoy serving everything from a scooter to a superbike available on both website and mobile application.</p>
        <p>We are obsessed with the concept of ‘Why buy when you can rent’.</p>
      </div>
      <div className="row3">
        <h1>Our Journey</h1>
         {aboutapi.map((i)=>(
          <div className="journey-year-one">
          <h4>{i.year}</h4>
          <div className="year-one-detail">
            <img src={i.img} alt="" />
            <div className="company-rental-detail">
              <h4>{i.para1}</h4>
              <p>{i.para2}</p>
            </div>
          </div>
        </div>
         ))}
      </div>
    </div>
  )
}

export default About
