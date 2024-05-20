import React from 'react'
import './Events.css'
import white_arrow from '../../assets/white-arrow.png'

const Events = () => {
  return (
    <div className='events'>
    <div className="cards">
      <div className="card1" id='card'>Event1</div>
      <div className="card2" id='card'>Event2</div>
      <div className="card3" id='card'>Event3</div>
      <div className="card4" id='card'>Event4</div>
    </div>
    <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
  </div>
  )
}

export default Events