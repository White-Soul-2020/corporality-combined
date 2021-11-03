import React from 'react';
import Group803 from './img/Group 803.png';
import Group804 from './img/Group 804.png';
import Group805 from './img/Group 805.png';
import Group806 from './img/Group 806.png';
import Group807 from './img/Group 807.png';
import line from './img/lines.png';
import infinity from './img/infinity.png';
import './proven.css'


function provenSection() {
    return (
        <div className="provenSection">
            <div className="provenSection_heading">
            <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <h1 class="animate two">
                    <span>P</span><span>R</span><span>O</span><span>V</span><span>E</span><span>N</span>&nbsp;
                    <span>P</span><span>R</span><span>O</span><span>C</span><span>E</span><span>S</span><span>S</span><span>E</span><span>S</span>&nbsp;

                </h1>
            </div>
            <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                <p className="provenSection_para">Making split-second decisions are standard in every business. Establishing a dynamic GTM strategy will help you align your team with the same goals. A GTM strategy will also assist you with.</p>
            </div>
            </div>


            <div className="proven_processes_images_content">

                <div class="content-inner fl-wrap flip-card" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="500">

                    <div class="content-front">
                        <div class="cf-inner">
                            <div className="bg_line"><img src={line}></img></div>
                            <div class="overlay"></div>
                            <div class="inner">
                                <img src={Group803} className="logo_img"></img>
                                <p>Forming a clearly defined product marketing plan</p>
                            </div>
                        </div>

                    </div>
                    <div class="content-back">
                        <div class="cf-inner">
                        <div className="bg_line"><img src={line}></img></div>
                            <div class="overlay"></div>
                            <div class="inner">
                                <img src={Group803}></img>
                                <p>Forming a clearly defined product marketing plan</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="content-inner fl-wrap flip-card" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1000">
                    <div class="content-front">
                        <div class="cf-inner">
                        <div className="bg_line"><img src={line}></img></div>
                            <div class="overlay"></div>
                            <div class="inner">
                                <img src={Group804}></img>
                                <p>Paper allocation of time and money</p>
                            </div>
                        </div>

                    </div>
                    <div class="content-back ">
                        <div class="cf-inner"><div className="bg_line"><img src={line}></img></div>
                            <div class="overlay"></div>
                            <div class="inner">
                                <img src={Group804}></img>
                                <p>Paper allocation of time and money</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="content-inner fl-wrap flip-card" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1500">
                    <div class="content-front">
                        <div class="cf-inner">
                        <div className="bg_line"><img src={line}></img></div>
                            <div class="overlay"></div>
                            <div class="inner">
                                <img src={Group805}></img>
                                <p>Successful product or service launch</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-back">
                        <div class="cf-inner">
                        <div className="bg_line"><img src={line}></img></div>
                            <div class="overlay"></div>
                            <div class="inner">
                                <img src={Group805}></img>
                                <p>Successful product or service launch</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="proven_processes_images_content">

                <div class="content-inner fl-wrap flip-card" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="2000">
                    <div class="content-front">
                        <div class="cf-inner">
                        <div className="bg_line"><img src={line}></img></div>
                            <div class="overlay"></div>
                            <div class="inner">
                                <img src={Group806}></img>
                                <p>Creating a solid path for growth</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-back">
                        <div class="cf-inner">
                        <div className="bg_line"><img src={line}></img></div>
                            <div class="overlay"></div>
                            <div class="inner">
                                <img src={Group806}></img>
                                <p>Creating a solid path for growth</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="content-inner fl-wrap flip-card" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="2500">
                    <div class="content-front">
                        <div class="cf-inner">
                        <div className="bg_line"><img src={line}></img></div>
                            <div class="overlay"></div>
                            <div class="inner">
                                <img src={Group807}></img>
                                <p>Establishing an effective customer service</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-back">
                        <div class="cf-inner">
                        <div className="bg_line"><img src={line}></img></div>
                            <div class="overlay"></div>
                            <div class="inner">
                                <img src={Group807}></img>
                                <p>Establishing an effective customer service</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                <div className="proven_processes_learn_more">
                    <button type="button" id="proven_processes_button">Learn More</button>
                </div>
            </div>
        </div>
    )

}

export default provenSection