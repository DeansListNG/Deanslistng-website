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
        <div className="cardss">services4</div>
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Services