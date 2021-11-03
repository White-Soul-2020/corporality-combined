import React, { useEffect } from 'react';
import vid from './img/V3.mp4';
import './banner.css';
import Rectangle68 from './img/Rectangle 68.png';
import Rectangle70 from './img/Rectangle 70.png';
import callIcon from './img/call 1.png';
import Layer1 from './img/Layer 1.png';
import Layer2 from './img/Layer 2.png';
import Layer3 from './img/Layer 3.png';
import Layer4 from './img/Layer 4.png';
import Layer5 from './img/Layer 5.png';
import Layer6 from './img/Layer 6.png';
import DescriptionAnimation from './descanimation';
function Market_Banner() {
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var textWrapper = document.querySelector('.heading');
                var textWrapper1 = document.querySelector('.desc');
                textWrapper.classList.add('two');
                setTimeout(() => {
                    DescriptionAnimation(textWrapper1,"Gain competitive advantage, manage time effectively, achieve successful product launch with innovative product development and management strategy, address innovation challenges, and ensure a viable path to market success with our GTM strategy.")
                }, 3000);
                setTimeout(()=>{
                    document.querySelector('.button_wrp').style.opacity=1;
                    
                },5000);

            }
            else {
                var textWrapper = document.querySelector('.animate');
                textWrapper.classList.remove('two');
                document.querySelector('.button_wrp').style.opacity=0;
                var textWrapper1 = document.querySelector('.desc');
                textWrapper1.innerHTML="";

            }
        })
    })
    useEffect(() => {
        observer.observe(document.querySelector(".banner_text_left"))
    })

    return (
        <div style={{ marginTop: '50px' }}>

            <div className="banner_video_wrapper">
                <video className="banner_vid" autoplay="autoplay" preload="preload" loop>
                    <source src={vid} type="video/mp4"></source>
                </video>
            </div>
            <div className="main_container">
                <div className="banner_text_wrapper">

                    <div className="banner_text_left">
                        <img src={Rectangle68} className="rectangle68" />
                        <div data-aos='fade-right' data-aos-duration='2000'>
                            <h1 class="heading animate">
                                <span>s</span><span>t</span><span>e</span><span>p</span>&nbsp;
                                <span>u</span><span>p</span>&nbsp;
                                <span>y</span><span>o</span><span>u</span><span>r</span>&nbsp;
                                <span>g</span><span>a</span><span>m</span><span>e</span>
                            </h1>
                        </div>
                        <p className="desc"> </p>
                        <div className="button_wrp" style={{opacity:0}} data-aos='fade-right' data-aos-duration='2000' data-aos-delay='3000'>
                            <div className="market_banner_button">
                                <button>Book a discovery call</button>
                            </div>
                           
                        </div>
                        <img src={Rectangle70} className="rectangle70" />
                    </div>

                    {/* <div className="market-banner-call-box">
                        <div className="market-banner-call-icon">
                            <img src={callIcon} alt="call icon" />
                        </div>

                    </div> */}


                </div>
            </div>
            <div className="home-banner-social-box">
                <div className="home-banner-icons">
                    <a href="https://www.facebook.com/CorporalityG/"><img src={Layer1} className="layer1" /></a>
                    <a href="https://twitter.com/corporalityg/"><img src={Layer4} className="layer4" /></a>
                    <a href="https://www.instagram.com/corporalityg/"><img src={Layer3} className="layer3" /></a>
                    <a href="https://www.linkedin.com/company/corporality/"><img src={Layer6} className="layer6" /></a>
                    <a href="https://in.pinterest.com/CorporalityG/"><img src={Layer5} className="layer5" /></a>
                    <a href="https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg/"><img src={Layer2} className="layer2" /></a>
                </div>
            </div>

        </div>
    )
}

export default Market_Banner;
