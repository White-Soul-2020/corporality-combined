import React from 'react'
import { useEffect} from 'react';


import Navbar from '../navigation/navbar';
import Footer from '../footer/footer';
import Banner from './banner';


import AOS from 'aos'; 
import anime from 'animejs';

function HomePage() {
  
    return (
      <div>
        {/* <Navbar/> */}
        {/* <Footer/> */}
        <Banner/>
      </div>
    );
}

export default HomePage;