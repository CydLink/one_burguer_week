import React from 'react';
import './produts.css';

import BGONE from '../../assets/burger-one.png';
import BGTWO from '../../assets/burger-two.png';
import BGTHREE from '../../assets/burger-one.png';

const Produts = () => {
  return (
    <section id='menu' className='container produts__container'>
      <div className='produts__title'>
       <h2>ALWAYS TASTY BURGER</h2>
      </div>
      <article className='context__title'>
        <h1>CHOOSE & ENJOY</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique earum nisi, nam molestias quia qui accusamus ipsa fuga expedita voluptatibus maxime? Quo nostrum exceptur placeat quod possimus quam amet asperiores, recusandae iure.
          </p>
      </article>

      <article className='produts__burgers'>
        
        <div className='produts__burger-one'>
          <img src={BGONE} alt='gurger-one' className='burger-one'/>
          <h3>LOREM IPSUM DOLAR</h3>
          <p>Lorem ipsum dolar sit amet, consectetur<br/>adipiscing elit, sed do</p>
          <button type='button'>ORDER NOW</button>
        </div>

        <div className='produts__burger-two'>
          <img src={BGTWO} alt='gurger-one' className='burger-two'/>
          <h3>LOREM IPSUM DOLAR</h3>
          <p>Lorem ipsum dolar sit amet, consectetur<br/>adipiscing elit, sed do</p>
          <button type='button'>ORDER NOW</button>
        </div>

        <div className='produts__burger-three'>
          <img src={BGTHREE} alt='gurger-one' className='burger-three'/>
          <h3>LOREM IPSUM DOLAR</h3>
          <p>Lorem ipsum dolar sit amet, consectetur<br/>adipiscing elit, sed do</p>
          <button type='button'>ORDER NOW</button>
        </div>
        
      </article>
    </section>
  )
}

export default Produts;