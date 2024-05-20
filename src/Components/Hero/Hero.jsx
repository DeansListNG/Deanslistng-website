import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Deanslist ng</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis quo dolore, quia delectus voluptas vitae sint, est porro eligendi reiciendis accusantium facilis rem possimus fugiat rerum, sit ad blanditiis!</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>

    </div>
  )
}

export default Hero