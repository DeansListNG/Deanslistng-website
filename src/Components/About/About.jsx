import React from 'react'
import './About.css'
import about_img from '../../assets/about-img.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
        
        </div>
        <div className="about-right">
            <h3>ABOUT DEANSLIST_NG</h3>
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Nesciunt earum neque iure aliquam unde laudantium adipisci, 
            aut qui minima quo, ullam similique obcaecati dolores doloribus nisi labore distinctio aspernatur est.</p>
        </div>
    </div>
  )
}

export default About