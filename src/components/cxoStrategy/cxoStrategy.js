import React from 'react'
import { useEffect} from 'react';
import './cxoStrategy.css';

import Navbar from '../navigation/navbar';
import Footer from '../footer/footer';

import Talent from './Talent';
import Charge from './Charge';
import Continously from './Continously';
import Leverage from './Leverage';
import Differentiate from './Differentiate';


import AOS from 'aos'; 
import anime from 'animejs';

function HomePage() {
  
    return (
      <div>
        <Navbar/>
        <Differentiate/>
        <Charge/>
        <Talent/>
        <Continously/>
        <Leverage/>
        <Footer/>

      </div>
    );
}

export default HomePage;