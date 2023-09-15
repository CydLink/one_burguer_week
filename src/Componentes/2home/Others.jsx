import React from 'react';
import './others.css';

import ImageOne from '../../assets/img-one.png';
import ImageTwo from '../../assets/img-two.png';
import ImageThree from '../../assets/img-three.png';

const Others = () => {
  return (
    <section className='container others__container'>

      <div className='quadros__container'>

        <article className='quadro__one'>
        
            <img src={ImageOne} alt='image1' className='quadro__img-one'/> 


        </article>

        <article className='quadro__two'>
        <div className='hhh'>
              <h1>s</h1>
          </div>
          <img src={ImageTwo} alt='image2' className='quadro__img-two'/> 

        </article>

        <article className='quadro__threee'>

          <img src={ImageThree} alt='image3' className='quadro__img-three'/> 

        </article>

      </div>
    </section>
  )
}

export default Others;