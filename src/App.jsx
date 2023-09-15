import React from 'react';

import Header from './Componentes/1header/Header';
import Others from './Componentes/2home/Others';
import Produts from './Componentes/3menu/Produts';
import Discover from './Componentes/4our-story/Discover';
import Reservation from './Componentes/5reservation/Reservation';
import Footer from './Componentes/6footer/Footer';


const App = () => {
  return (
    <>
        <Header />
        <Others />
        <Produts />
        <Discover />
        <Reservation />
        <Footer />

    </>
  )
}

export default App;