import React, { useEffect } from 'react';
import './delevering.css';
import Group886 from './img/Group 886.png';
import Reasearch from './img/Research.png';
import segment from './img/Corporality - segment.png';
import create from './img/Create a name.png';
import customize from './img/Marketing statergy new 1.png';
import identify from './img/Identify.png';
import identify_icon from './img/Identify icon.png';
import swot from './img/swot.png';
import PortfolioNew from './img/Portfolio new.png';
import prepositionnew from './img/prepositions new.png';
import Excute from './img/Excecute strategy new.png';
import Guideandoutline from './img/Guide and outline.png';
import Icon8 from './img/Icon 8.png';
import Draft2 from './img/Draft (2).png';
import Reasearchtarget from './img/Research target.png';
import feedbackgathering from './img/feedback gathering (2).png';
import collectingpeople from './img/colleting people.png';
import desigingoffers from './img/designing offers.png';
import competitor from './img/competitor.png';
import innovation from './img/innovation.png';
import feedback from './img/feedback.png';
import reportnew from './img/report new.png';
import problemsolving from './img/Problem Solving.png';
import Line22 from './img/Line 22.png';
import Line23 from './img/Line 23.png';
import Line24 from './img/Line 24.png';
import Line25 from './img/Line 25.png';
import Line26 from './img/Line 26.png';
import Line27 from './img/Line 27.png';
function Delevering() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var textWrapper = document.querySelector('.delevering_section h1');
                textWrapper.classList.add('two');
            }
            else {
                var textWrapper = document.querySelector('.delevering_section h1');
                textWrapper.classList.remove('two');
            }
        })
    })
    useEffect(() => {
        observer.observe(document.querySelector(".delevering_section"));
    })


    return (
        <div className="delevering_section" style={{ marginTop: '50px' }}>
            <div className="main_container">
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out">
                    <h1 className="animate"><span>D</span><span>e</span><span>l</span><span>i</span><span>v</span><span>e</span><span>r</span><span>i</span><span>n</span><span>g</span>&nbsp;
                        <span>u</span><span>n</span><span>i</span><span>q</span><span>u</span><span>e</span>&nbsp;
                        <span>v</span><span>a</span><span>l</span><span>u</span><span>e</span>&nbsp;
                        <span>p</span><span>r</span><span>o</span><span>p</span><span>o</span><span>s</span><span>i</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span></h1>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                    <p>The founding structure of the GTM strategy is to plan, refine, iterate and plan again till you are convinced and confident about stepping forward. The key to a profitable product launch is crafting an actionable and practical go-to-marketing plan while dodging and eliminating disastrous hiccups and glitches.</p>
                </div>
            </div>

            <div className="delevering_card_wrapper">

                <img src={Line22} className="line22" />
                <img src={Line23} className="line23" />
                <div className="delevering_card_wrapper1">
                    <div data-aos='zoom-in' data-aos-duration="2500">
                        <div className="delevering_card_head">
                            <h1>Customer Persona</h1>
                            <img src={Group886} />
                        </div>
                    </div>
                    <div className="delevering_card_wrapper_inner">
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={Reasearch}></img>
                                    <h1>Research Personas </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={segment}></img>
                                    <h1>Segment Personas  </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='1500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={create}></img>
                                    <h1>Create a name or story </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='2000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={identify}></img>
                                    <h1>Identify Objectives and Challenges </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='2500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={customize}></img>
                                    <h1>Customised digital marketing and sales strategies </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Line24} className="line24" />
                <div className="delevering_card_wrapper1">
                    <div data-aos='zoom-in' data-aos-duration="2500">
                        <div className="delevering_card_head">
                            <h1 id="competitor_analysis">Competitor Analysis</h1>
                            <img src={Group886} />

                        </div>
                    </div>
                    <div className="delevering_card_wrapper_inner">
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='1000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={identify_icon}></img>
                                    <h1>Identidying objectives and competitors </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={swot}></img>
                                    <h1>Market share and SWOT Analysis</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='2000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={PortfolioNew}></img>
                                    <h1>Buliding a competitive prrtfolio</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='2500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={prepositionnew}></img>
                                    <h1>Compare value propositions</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='3000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={Excute}></img>
                                    <h1>Execute strategies and follow-up </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Line25} className="line25" />
                <div className="delevering_card_wrapper1">
                    <div data-aos='zoom-in' data-aos-duration="2500">
                        <div className="delevering_card_head" >
                            <h1 >Messaging Strategy</h1>
                            <img src={Group886} />

                        </div>
                    </div>
                    <div className="delevering_card_wrapper_inner">
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={Guideandoutline}></img>
                                    <h1>Prepare a guide and outline </h1>
                                </div>

                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={Icon8}></img>
                                    <h1>Identify messaging channels</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={Draft2}></img>
                                    <h1>Draft purpose of the communication</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='2000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={Reasearchtarget}></img>
                                    <h1>Research targer audience</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='2500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={feedbackgathering}></img>
                                    <h1>Critical feedback gathering and improvement</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Line26} className="line26" />
                <div className="delevering_card_wrapper1">
                    <div data-aos='zoom-in' data-aos-duration="2500">
                        <div className="delevering_card_head">
                            <h1>Stratagem</h1>
                            <img src={Group886} />

                        </div>
                    </div>
                    <div className="delevering_card_wrapper_inner">
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='1000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={collectingpeople}></img>
                                    <h1 id="collecting" >Collating high-quality data - to targer the right people</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={desigingoffers}></img>
                                    <h1>Designing offers according to customer funnels </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='2000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={competitor}></img>
                                    <h1>Finding competitor ranking and niches</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='2500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={innovation}></img>
                                    <h1>Co-marketing initiatives and events</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Line27} className="line27" />
                <div className="delevering_card_wrapper1">
                    <div data-aos='zoom-in' data-aos-duration="2500">
                        <div className="delevering_card_head">
                            <h1>Feed back</h1>
                            <img src={Group886} />

                        </div>
                    </div>
                    <div className="delevering_card_wrapper_inner">
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={feedback}></img>
                                    <h1>Establishing a feedback loop</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={reportnew}></img>
                                    <h1>Reporting progress </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='1500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={problemsolving}></img>
                                    <h1>Resolving pain points </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Delevering
