import React from 'react';
import './footer.css';

import Logowhite from '../../assets/logo-white.png';
import EMAIL from '../../assets/Email.png';
import LOCAL from '../../assets/Location.png';

import INSTAGRAM from '../../assets/Instagram.png';
import FACEBOOK from '../../assets/Facebook.png';
import TWITTER from '../../assets/Twitter.png';
import WHATSAPP from '../../assets/WhatsApp.png';
 

const Footer = () => {
  return (

    <footer className='container footer__container'>

              <article className='footer__items'>

                <div className='container footer__text-left'>

                  <div className='footer__logo'>
                      <a href='#header'><img src={Logowhite} alt='logo'/></a>
                  </div>  
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis.</p>
                  
                  <small className='copyright__front'>&copy;BURGERWEEK 2023. ALL RIGHTS RESERVED.</small>

                </div>

                <div className='container footer__text-right'>

                  <div className='footer__items-right'>

                    <div className='footer__contact'>
                    <li><img src={LOCAL} alt='img-local'/> MAIN ROAD, BUILDING NAME, COUNTRY</li>
                    <li><img src={EMAIL} alt='img-local'/> INFO@BURGERWEEK.COM</li>
                    </div>

                    <div className='footer__socials'>
                        <a href='instagram.com'><img src={INSTAGRAM} alt='logo-instagram'/></a>
                        <a href='faecbook.com'><img src={FACEBOOK} alt='logo-facebook'/></a>
                        <a href='twitter.com'><img src={TWITTER} alt='logo-twitter'/></a>
                        <a href='whatsapp.com'><img src={WHATSAPP} alt='logo-whatsapp'/></a>
                        
                    </div>

                  </div>

                </div>
                <small className='copyright__back'>&copy;BURGERWEEK 2023. ALL RIGHTS RESERVED.</small>
              </article>

    </footer>
  )
}

export default Footer;