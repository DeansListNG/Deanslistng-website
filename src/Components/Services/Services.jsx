import React from 'react'
import './Services.css'
import white_arrow from '../../assets/white-arrow.png'

const Services = () => {
  return (
    <div className='services'>
      <div className="cards">
        <div className="cardss">services1</div>
        <div className="cardss">services2</div>
        <div className="cardss">services3</div>
      </div>
      <a href="https://deanslist.services/" target='_blan'><button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button></a>
    </div>
  )
}

export default Services