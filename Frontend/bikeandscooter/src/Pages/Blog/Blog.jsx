import React from 'react'
import './Blog.css'
import { blogcards } from './Blogcards'
import { NavLink } from 'react-router-dom'
const Blog = () => {
  return (
    <div className='blog'>
      <div className="blog-containerone">

      <div className="containerone-images">
        <img src="https://freedo.rentals/blog-images/blog-22.jpg" alt="" />
      </div>
        <div className="container-bestplaces">
          <button>Best Places</button>
          <div className="container-details">
            <h4>Explore India on Two Wheels: Top Bike-Friendly Road Trips with Freedo Bike Rentals</h4>
            <p>What does every bike lover want? Explore those places that make their soul happy! India has some finest and most scenic places to offer! You can explore picturesque surroundings and breathtaking landscapes on your two-wheeled buddy.</p>
            <NavLink>Read More</NavLink>
          </div>

        </div>
      </div>
      <div className="blog-containertwo">
         {blogcards.map((i)=>(
          <div className="blog-card">
          <img src={i.img} alt="" />
          <div className="blog-card-content">
          <button>Best Places</button>
            <h4>{i.heading}</h4>
            <p>{i.read}</p>
            <NavLink>Read More</NavLink>
          </div>
        </div>
         ))}
      </div>
    </div>
  )
}

export default Blog
