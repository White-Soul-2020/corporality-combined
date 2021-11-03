import React from 'react'
import { useEffect } from 'react';
import Navbar from '../navigation/navbar';
import Footer from '../footer/footer';
import './patnershp.css'
import AOS from 'aos';
import paragonImg from "./img/paragon_img.png";
import trustpilotImg from "./img/trustpilot_img.png";
import anzImg from "./img/anz_img.png";
import rippaImg from "./img/rippa_img.png";
import simpleaiImg from "./img/simpleai_img.png";

function Patnership() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div style={{ overflow: 'hidden' }}>

            <title>Corporality- Patnership </title>
            <Navbar />
            <section className="patnership_banner1">
                <div className="main-container">
                    <div className="patnership_banner">
                        <div className="patnership_banner_left">

                            <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="2500">
                                <h1>Partnership Programmes</h1>
                            </div>
                            <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="1000">
                                <p>Corporality Global holds extensive strategic strength partnership programmes that extend entrepreneurial reach beyond the ordinary.</p>
                            </div>
                            <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="1500">
                                <button id="banner-btn">Read More</button>
                            </div>

                            <img src="./img/banner/banner-5.png" />
                        </div>


                        <div className="patnership_banner_right" >
                            <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration="2500">

                                <div className="patnership_banner_image">

                                    <div className="banner_right_inner">
                                        <img src="./img/banner/patnershp_banner.png" />
                                    </div>
                                    <img src="./img/banner/Rectangle 6.png" className="patnership_banner_image_bkg" />

                                </div>

                            </div>
                            <img src="./img/banner/banner-5.png" className="banner_right_img5" />
                            <img src="./img/banner/banner-4.png" className="banner_right_img4" />
                            <img src="./img/banner/banner-3.png" className="banner_right_img3" />
                        </div>
                    </div>
                </div>
                <div className="patnership_overlay">
                    <div className="patnership_ellipse-1"></div>

                </div>

            </section>







            {/* <!--================Strat of DIGITAL AND TECHNOLOGICAL SUSTAINABILITY Area =================--> */}

            <section className="patnership_our-faith">

                <div className="patnership_our-faith-main">
                    <div className="patnership_our-faith-bkg">
                        <div className="patnership_our-faith-rect7">
                            <img src="./img/Our-Faith/Rectangle 7.png" alt="" />
                        </div>
                        <div className="patnership_our-faith-rect8">
                            <img src="./img/Our-Faith/Rectangle 8.png" alt="" />
                        </div>

                        <div className="patnership_our-faith-rect9">
                            <img src="./img/Our-Faith/Rectangle 9.png" alt="" />
                        </div>
                    </div>
                    <div className="patnership_our-faith-wrapper">
                        <div className="main-container">
                            <div className="patnership_our-faith-back">

                                <div className="patnership_our-faith-image">
                                    <div className="main-container">
                                        <div className="patnership_our-faith-main-img">
                                            <div alt="" data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="10">
                                                <img src='./img/Our-Faith/patnership_impetus.png'></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="patnership_our-faith-vector">
                                        <img src="./img/Our-Faith/Vector.png" alt="" />
                                    </div>
                                    <img className="patnership_our-faith-rect8-p" src="./img/Our-Faith/Rectangle 8-p.png" alt="" />
                                </div>

                                <div className="patnership_our-faith-text">
                                    <div className='main-container'>
                                        <div data-aos="fade-left" data-aos-duration="2000">
                                            <h2 className="patnership_our-faith-head">CONVERSATIONS WITH MORE THAN 100 ENTREPRENEURS ACROSS THE GLOBE</h2>
                                        </div>
                                        <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000">
                                            <p className="patnership_our-faith-para">We have spoken to global leaders from manufacturing, to medtech, to hospitality and geospatial initiators.</p>
                                        </div>
                                        <div class="button-aos" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1500" >
                                            <button id="conversations-partnership-btn">Check out Our set of Interviews</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            
    <section class="patnership_we-make-banner" >
        <div class="main-container">
            {/* <!--main container div--> */}
            <div class="patnership_we-make-banner-div" style={{marginLeft: '-12%'}}>
                <div class="patnership_we-make-banner-head">
                    <h4 data-aos="zoom-in" data-aos-duration="2000" style={{fontSize: '32px', fontWeight: '700',marginLeft:'22px'}}>Discovery Calls</h4>
                    <p data-aos="zoom-in" data-aos-duration="2000" dat-aos-delay="100"
                        style={{fontSize: '14px', color: '#757575', fontWeight: '400',width: '860px',height: '66px',marginLeft: '-6%'}}>Every
                        month the leadership team encourages discovery calls that can be directly booked on our
                        platform. Those who wish to grow their sales and business development skills can express their
                        interest with us.Join our commercial partnership programme to earn regular commissions on
                        referrals. Be a part of the Corporality vision.
                    </p>
                </div>
                <div class="patnership_paralax-rect">
                    {/* <!-- <img width="1540px" src="./img/wemake-Banner/Rectangle 5.png"> --> */}
                </div>
                <section>
                    <div class="patnership_we-make-banner-rect12">
                        <img src="./img/wemake-Banner/Rectangle 12.png" />
                    </div>
                    <div class="patnership_we-make-banner-rect8">
                        <img src="./img/wemake-Banner/Rectangle 8.png" />
                    </div>
                    <div class="patnership_we-make-banner-rect11">
                        <img src="./img/wemake-Banner/Rectangle 11.png" />
                    </div>
                    <div class="patnership_we-make-banner-rect7">
                        <img src="./img/wemake-Banner/Rectangle 7.png" style={{marginTop:'100%', marginLeft: '-830%'}} />
                    </div>
                    <div class="patnership_we-make-banner-rect9">
                        <img src="./img/wemake-Banner/Rectangle 9.png" style={{marginTop:'330%', marginLeft: '-100%'}} />
                    </div>

                    <div class="patnership_iwfc_explore_wrapper-1">


                        <div class="patnership_ex_img-1" data-aos="zoom-in" data-aos-duration="1000">
                            <img src="./img/combinating_and_ideation/Vector_arrow.png" alt="" />
                        </div>
                        <div class="patnership_exp_text-1" style={{marginTop:'-180px'}} data-aos="zoom-in" data-aos-duration="1000">
                            <button id="patnership_wemake-btn">Know More</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>



            <section className="stp">
                <div className="stp-wrapper">
                    <div className="stp-top im">
                        <h2 data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out">Strategic Partnership</h2>
                        <p data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000">Overcome your business fears and widen your resources and expertise, with our strategic partnership programmes. There are several stories and experiences that we share with our partners as well.</p>
                    </div>
                    <div className="stp-bottom">
                        <div className="stp-logo-imgs" data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                            <img src={paragonImg} alt="paragon logo" />
                        </div>
                        <div className="stp-logo-imgs" data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1500">
                            <img src={trustpilotImg} alt="trustpilot logo" />
                        </div>
                        <div className="stp-logo-imgs" data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="2000">
                            <img src={anzImg} alt="anz India logo" />
                        </div>
                        <div className="stp-logo-imgs" data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="2500">
                            <img src={rippaImg} alt="rippa logo" />
                        </div>
                        <div className="stp-logo-imgs" data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="3000" >
                            <img src={simpleaiImg} alt="simple AI logo" />
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </div>
    )
}

export default Patnership
