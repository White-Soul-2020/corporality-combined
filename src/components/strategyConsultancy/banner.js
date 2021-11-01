import React from 'react'
import { useEffect} from 'react';
import './banner.css';
import '../../App.css';

import bannerImg from './img/banner/bannerImg.png'
import youtubeBox from './img/banner/youtubeBox.png'

// import Navbar from './navigation/navbar';
import Footer from '../footer/footer';


import AOS from 'aos'; 
import anime from 'animejs';

function HomePage() {
  
    return (
      <div>
      {/* <Navbar/> */}
        <div className=" jumbotron landingPage">
          <div className="row bannerContent">
            <div className=" banner-col-1 col-lg-7">
              <div className="banner-col-1-section-1">
                <h2>STRATEGIC GROWTH CONSULTING DRIVEN <br/>BY EXPERTISE, ANALYTICS AND EXPERIENCE</h2>
                <p>Corporality Global is committed to delivering enterprise value in the form of<br/> revenue growth and operations that don't just meet expectations but exceed them.</p>
              </div>
              <div className="banner-col-1-section-2">
                <div className="youtube-box">
                  <div className="row p-3 text-center youtube-box-col-1">
                    <div className="col-4">
                      <img src={youtubeBox} className="youtubeBoxImg"/>
                    </div>
                      <div className="col-8">
                        <div className="youtube-box-col-2">
                          <h4>Subscribe Our YouTube Channel</h4>
                          {/* <p>subscribe</p> */}
                          <button className="banner-btn mt-2">Subscribe</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="banner-col-2 col-lg-5">
              <img src={bannerImg} className="bannerImg" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default HomePage;