import React from 'react';
import './header.css';

import Logo from '../../assets/b-logo.png';
import Image from '../../assets/header-img.png';
import ContLogo from '../../assets/contact-lg.png'


const Header = () => {
  return (
    <header id='main__header'> 

        <div className='navbar__nav'>
        <div className='navbar'>

          <div className='header__logo'>
            <a href='#main__header'><img src={Logo}/></a>
          </div>

          <div className='navbar__menu'>
            <h5> <img className='contact-logo' alt='contact-logo' src={ContLogo}/></h5>
            
            <div className='navbar_item_menu'>
            <a href='#main__header'>HOME</a>
            <a href='#menu'>MENU</a>
            <a href='#ourStory'>OUR STORY</a>
            <a href='#reservation'>Reservation</a>
            </div>
          </div>
        </div>

        </div>

      <div className='container main__header-container'>

        <div className='main__header-left'>
          <h1>IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</h1>
          <h2>BURGER</h2>
          <h3>WEEk</h3>
        </div>

        <div className='main__header-right'>
           <img className='img__burguer' src={Image} alt='gd'/>
        </div>
      </div>

    </header>
  )
}

export default Header;