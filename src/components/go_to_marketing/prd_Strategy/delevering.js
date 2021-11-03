import React,{useEffect} from 'react';
import './delevering.css';
import Group886 from './img/Group 886.png';
import Reasearch from './img/Research.png';
import segment from './img/Corporality - segment.png';
import create from './img/Create a name.png';
import customize from './img/Marketing statergy new 1.png';
import identify from './img/Identify.png';
import identify_icon from './img/Identify icon.png';
import Line22 from './img/Line 22.png';
import Line23 from './img/Line 23.png';
import Line26 from './img/Line 26.png';
import market_analysis from './img/market-analysis.png';
import creativity from './img/creativity.png';
import profit from './img/profits.png';
import box from './img/box.png';
import cooperation from './img/cooperation.png';
import onlineshop from './img/online-shop.png';
import goal from './img/goal.png';
import brandawareness from './img/brand-awareness.png';
import test1 from './img/test-1.png';
import received from './img/received.png';
import workflow from './img/workflow.png';
import processing from './img/processing.png';
import prd from './img/product.png';
import sales from './img/sales.png';
import customberservice from './img/customer-service.png';
import marketingstrnew from './img/Marketing statergy new 1.png';
import DescriptionAnimation from '../maketing_banner/descanimation';

function Prd_Strategy() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var textWrapper = document.querySelector('.strategy_section h1');
                textWrapper.classList.add('two');
            }
            else {
                var textWrapper = document.querySelector('.strategy_section h1');
                textWrapper.classList.remove('two');
            }
        })
    })
    useEffect(()=>{
        observer.observe(document.querySelector(".strategy_section"));
    })
    return (
        <div className="strategy_section" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
            <div className="main_container">
                <h1 className="animate"><span>P</span><span>r</span><span>o</span><span>d</span><span>u</span><span>c</span><span>t</span>&nbsp;
                    <span>S</span><span>t</span><span>r</span><span>a</span><span>t</span><span>e</span><span>g</span><span>y</span></h1>
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                    <p>A product planning to launch, your strategy can make or break the product perception. Pitching your product perception to your Buyer’s Persona is critical to the success of your Idea and close to a sale in a persuasive way. More importantly scaling your client portfolio is all dependent upon perception - would you agree?</p>
                </div>
            </div>

            <div className="strategy_card_wrapper">

                <img src={Line22} className="strategy_line22" />

                <div className="strategy_card_wrapper1">
                    <img src={Line23} className="strategy_line23" />
                    <div className="strategy_card_head">
                        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
                            <h1>Product Planning</h1>
                            <img src={Group886} />
                        </div>
                    </div>
                    <div className="strategy_card_wrapper_inner">
                        <div data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" >
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={market_analysis}></img>
                                    <h1>Market Reasearch and Demand </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={creativity}></img>
                                    <h1>Product Vision and Demand  </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='1000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={profit}></img>
                                    <h1>Bussiness Models and Financial</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='1500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={box}></img>
                                    <h1>Product Journey and Roadmap</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='2000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={cooperation}></img>
                                    <h1>Partner Strategy</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='2500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={onlineshop}></img>
                                    <h1>Product Design</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="strategy_card_wrapper1">
                    <img src={Line26} className="strategy_line26" />
                    <div className="strategy_card_head">
                        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
                            <h1>Product Development</h1>
                            <img src={Group886} />
                        </div>
                    </div>
                    <div className="strategy_card_wrapper_inner">
                        <div data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={goal}></img>
                                    <h1>Marketing Objective vs Value Proposition</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='1000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={brandawareness}></img>
                                    <h1>Brand Strategy and Marketing</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='1500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={test1}></img>
                                    <h1>User Experience Design</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='2000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={received}></img>
                                    <h1>Product Packaging</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='2500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={workflow}></img>
                                    <h1>Release Strategy and Planning</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="strategy_card_wrapper1">
                    <img src={Line26} className="strategy_line27" />
                    <div className="strategy_card_head">
                        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
                            <h1>Product Launch</h1>
                            <img src={Group886} />
                        </div>
                    </div>
                    <div className="strategy_card_wrapper_inner">
                        <div data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out">
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={processing}></img>
                                    <h1>Launch Process Implementation</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={prd}></img>
                                    <h1>Product Marketing Support</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='1000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={sales}></img>
                                    <h1>Product sales Support</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='1500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={customberservice}></img>
                                    <h1>Customber success Support</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay='2000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={marketingstrnew}></img>
                                    <h1>Monitoring and Feedback</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Prd_Strategy
