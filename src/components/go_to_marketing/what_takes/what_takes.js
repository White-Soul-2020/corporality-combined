import React,{useEffect} from 'react';
import './what_takes.css';
import profit from './img/profit.png';
import Group912 from './img/Group 912.png';
import Group907 from './img/Group 907.png';
import Group908 from './img/Group 908.png';
import Group913 from './img/Group 913.png';
import award from './img/award.png';
import desktop1 from './img/desktop 1.png';
import time_management from './img/time-management.png';
import piechart from './img/pie-chart.png';
import distribution from './img/distribution.png';
import analytic from './img/analytics.png';
import main_logo from './img/Main icon.png';
import Group925 from './img/Group 925.png';
import Group9051 from './img/Group 9051.png';
import Vector4 from './img/Vector 4.png';
import Group from './img/_Group_.png';
import Group1 from './img/_Group_ (1).png';
import Polygon41 from './img/Polygon 41.png';
import Rectangle181 from './img/Rectangle 181.png';
import Rectangle182 from './img/Rectangle 182.png';
import DescriptionAnimation from '../maketing_banner/descanimation';
function What_Takes() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var textWrapper = document.querySelector('.improved_left h1');
                var textWrapper1 = document.querySelector('.improved_left p');
                textWrapper.classList.add('two');
                setTimeout(() => {
                    DescriptionAnimation(textWrapper1,"Corporality’s innovative digital marketing audit strategies help create visually evident changes in your current processes to bring about a fresh and impactful perspective to further augment the presence of your brand.")
                }, 3000);
                setTimeout(()=>{
                 document.querySelector('.improved_button').style.opacity=1;
                },8000);
            }
            else {
                var textWrapper = document.querySelector('.improved_left h1');
                var textWrapper1 = document.querySelector('.improved_left p');
                textWrapper.classList.remove('two');
                document.querySelector('.improved_button').style.opacity=0;
                textWrapper1.innerHTML="";

            }
        })
    })
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var textWrapper = document.querySelector('.corporality_heading h1');
                textWrapper.classList.add('two');
            }
            else {
                var textWrapper = document.querySelector('.corporality_heading h1');
                textWrapper.classList.remove('two');
            }
        })
    })
    useEffect(() => {
        observer.observe(document.querySelector(".improved"));
        observer1.observe(document.querySelector(".corporality_heading"));
    })
    return (
        <div>
            <div className="main_container">
                <div className="corporality" >
                    <div className="corporality_heading">
                        
                            <h1 className="animate"><span>C</span><span>o</span><span>r</span><span>p</span><span>o</span><span>r</span><span>a</span><span>l</span><span>i</span><span>t</span><span>y</span>&nbsp;
                            <span>h</span><span>a</span><span>s</span>&nbsp;
                             <span>w</span><span>h</span><span>a</span><span>t</span>&nbsp;
                              <span>i</span><span>t</span>&nbsp; 
                              <span>t</span><span>a</span><span>k</span><span>e</span><span>s</span></h1>
                        
                        <div data-aos='fade-down' data-aos-duration='2000' data-aos-delay='2000'>
                            <p>Our structured and proven methodology emanates powerful Go To Marketing strategies that meet the critical needs of your product’s positioning. We differentiate your product in a competitive environment and tailor a model that best suits the targeted segment. With us, GTM is a metamorphosis that ensures complete engagement while mapping all needs, impacts and opportunities for ultimate success.</p>
                        </div>
                    </div>
                    <div className="corporality_image" >
                        <div className="corporality_main_logo">
                            <div data-aos='zoom-in' data-aos-duration='1500'>
                                <div className="main_logo"></div>
                            </div>
                            <div data-aos='zoom-in' data-aos-duration='1500' data-aos-delay="300">
                                <img src={Group9051} className="group9051"></img>
                            </div>
                        </div>

                        <div className="corporality_card corporality_card1" data-aos='fade-right' data-aos-duration='2000' data-aos-delay='1000'>
                            <h1>Improved Marketing mix</h1>
                            <div className="corporality_logo">
                                <img src={profit} className="corporality_logo_img1"></img>
                                <img src={Group912} className="corporality_logo_img2"></img>
                            </div>

                        </div>

                        <div className="corporality_card corporality_card2" data-aos='fade-right' data-aos-duration='2000' data-aos-delay='1300'>
                            <h1>Service Level</h1>
                            <div className="corporality_logo">
                                <img src={desktop1} className="corporality_logo_img1"></img>
                                <img src={Group907} className="corporality_logo_img2"></img>
                            </div>
                        </div>


                        <div className="corporality_card corporality_card3" data-aos='fade-right' data-aos-duration='2000' data-aos-delay='1600'>
                            <h1>Market Share</h1>
                            <div className="corporality_logo">
                                <img src={piechart} className="corporality_logo_img1"></img>
                                <img src={Group908} className="corporality_logo_img2"></img>
                            </div>

                        </div>

                        <div className="corporality_card corporality_card5" data-aos='fade-left' data-aos-duration='2000' data-aos-delay='2200'>

                            <div className="corporality_logo">
                                <img src={time_management} className="corporality_logo_img1"></img>
                                <img src={Group908} className="corporality_logo_img2"></img>
                            </div>
                            <h1>Delivery Model Efficiency</h1>

                        </div>

                        <div className="corporality_card corporality_card6" data-aos='fade-left' data-aos-duration='2000' data-aos-delay='2500'>

                            <div className="corporality_logo">
                                <img src={analytic} className="corporality_logo_img1"></img>
                                <img src={Group907} className="corporality_logo_img2"></img>
                            </div>
                            <h1>Profitability</h1>

                        </div>

                        <div className="corporality_card corporality_card7" data-aos='fade-left' data-aos-duration='2000' data-aos-delay='2800'>
                            <div className="corporality_logo">
                                <img src={award} className="corporality_logo_img1"></img>
                                <img src={Group912} className="corporality_logo_img2"></img>
                            </div>
                            <h1>Brand image</h1>
                        </div>


                        <div className="corporality_card corporality_card4" data-aos='fade-up' data-aos-duration='2000' data-aos-delay='1900'>

                            <div className="corporality_logo">
                                <img src={distribution} className="corporality_logo_img1"></img>
                                <img src={Group913} className="corporality_logo_img2"></img>
                            </div>
                            <h1>Product Distribution</h1>

                        </div>
                    </div>
                </div>
            </div>

            <img src={Vector4} className="vector4" />
            <div className="group">
                <img src={Group} />
            </div>
            <div className="group1">
                <img src={Group1} />
            </div>
            <div className="main_container">
                <div className="improved">
                    <div className="improved_left" >
                        
                            {/* <h1>Improved Marketing mix</h1> */}
                            <h1 class="animate">
                                <span>I</span><span>m</span><span>p</span><span>r</span><span>o</span><span>v</span><span>e</span><span>d</span>&nbsp;
                                <span>M</span><span>a</span><span>r</span><span>k</span><span>e</span><span>t</span><span>i</span><span>n</span><span>g</span>&nbsp;
                                <span>M</span><span>i</span><span>x</span>&nbsp;

                            </h1>
                            <p className="desc"></p>
                        <div data-aos='fade-right' data-aos-duration='2000' data-aos-delay='1000'>
                            <div className="improved_button" style={{opacity:'0'}}>
                                <button>Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="improved_right">
                        <div className="improved_right_img">
                            <div data-aos='fade-left' data-aos-duration='2000'>
                                <div className="improved_right_img_inner">
                                    <img src={Polygon41}></img>
                                </div>
                            </div>
                            <div className="rectangle181 " >
                                <img src={Rectangle181}  />
                            </div>
                            <div className="rectangle182">
                                <img src={Rectangle182}  />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default What_Takes
