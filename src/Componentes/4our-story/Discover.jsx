import React, {useState, useEffect} from 'react';
import './discover.css';

import FOODIMAGE from '../../assets/foodimage.jpg';

const Discover = () => {
  
  return (
    <section id='ourStory' className='container discover__container'>
    
      <article className='discover__items'>
       <div className='discover__texts'>
          <h4>DISCOVER</h4>
            <h1>UPCOMING EVENTS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
       <div className='slide-navigation'>

          <div className='nav-btn'></div>
          <div className='nav-btn'></div>
          <div className='nav-btn'></div>

       </div>
       </div>


       <div className='food__image'>
            <img src={FOODIMAGE} alt='image-food' className='image__food'/>
       </div>

      </article>
    </section>
  )
}

export default Discover;