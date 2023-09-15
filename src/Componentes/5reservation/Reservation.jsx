import React from 'react';
import './reservation.css'

import IMG1 from '../../assets/Burger.png';
import IMG2 from '../../assets/Bottle.png';
import IMG3 from '../../assets/Image2.png';

const Reservation = () => {
  return (
    <section id='reservation' className='container reservation__container'>

      <article className='reservation__text'>
        <h4>RESERVATION</h4>
        <h2>BOOK YOUR TABLE</h2>
      </article>
      <div className='imgs__reservation'>
          <img className='img1' src={IMG1} alt='img'/>
          <img className='img2' src={IMG2} alt='img'/>
          <img className='img3' src={IMG3} alt='img'/> 
      </div>
      <article className='reservation__btn'>
        <input type="text" name="name" placeholder="Name" required/>
        <input type="text" name="date" placeholder="EMAIL" required/>
        <input type="text" name="number" placeholder="DATE" required/>
        <input type="text" name="name" placeholder="TIME" required/>
        <input type="text" name="name" placeholder="PEOPLE" required/>
        <button type='button'>FIND A TABLE</button>
      </article>

    </section>
  )
}

export default Reservation;