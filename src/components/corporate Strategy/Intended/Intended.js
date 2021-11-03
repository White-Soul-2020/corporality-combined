import React,{useEffect} from 'react';
import './Intended.css';
import position from './img/positioning.png'
import read from './img/readiness.png'
import timeline from './img/timeline.png'
import matrix from './img/matrix.png'
import corpVision from './img/corporateVision.png'
import marketObj from './img/marketingObj.png'
import outcome from './img/outcome.png'
import scope from './img/scoping.png'
import budget from './img/budget.png'
import strategizing from './img/strategizing.png'
import taskPlan from './img/taskPlan.png'
import techStack from './img/techStack.png'
import schedule from './img/scheduling.png'
import implementation from './img/implimentation.png'
import segment from './img/segmentation.png'
import knowledge from './img/knowledge.png'
import system from './img/systemPrep.png'
import future from './img/future.png'
import end from './img/endgoal.png'
import Group886 from './img/Group 886.png';


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
                var textWrapper = document.querySelector('.intended_section h1');
                textWrapper.classList.add('two');
            }
            else {
                var textWrapper = document.querySelector('.intended_section h1');
                textWrapper.classList.remove('two');
            }
        })
    })
    useEffect(()=>{
        observer.observe(document.querySelector(".intended_section"));
    })


    return (
        <div className="intended_section" >
            <div className="main_container newMain">
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out">

                    <h1 className="animate">
                    <span>I</span><span>N</span><span>T</span><span>E</span><span>N</span><span>D</span><span>E</span><span>D</span>&nbsp;
                    <span>M</span><span>A</span><span>T</span><span>U</span><span>R</span><span>I</span><span>T</span><span>Y</span>&nbsp;
                    <span>-</span>&nbsp;
                    <span>M</span><span>O</span><span>D</span><span>E</span><span>L</span><span>L</span><span>I</span><span>N</span><span>G</span>&nbsp;
                    <span>A</span><span>N</span><span>D</span>&nbsp;
                    <span>M</span><span>E</span><span>T</span><span>H</span><span>O</span><span>D</span><span>O</span><span>L</span><span>O</span><span>G</span><span>Y</span>&nbsp;
                    </h1>


                </div>
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                    <p>Designed and successfully used by Corporality to accelerate the rate of overall company growth, businesses focused on Human to Human growth (not just B2B or B2C) get the option to achieve their goals faster than their competitors. It expedites revenue growth by getting the functional marketing strategies of corporate culture, sales & lead generation, marketing, and solutions fully aligned to the management team’s visionary growth strategy for the company.</p>
                </div>
            </div>




            <div className="delevering_card_wrapper">

                <img src={Line22} className="line22" />
                <img src={Line23} className="line23" />
                <div className="delevering_card_wrapper1">
                    <div data-aos='zoom-in' data-aos-duration="2500">
                        <div className="intended_card_head">
                            <h1 className="shiftUp">Audit and Diagnostic</h1>
                            <img src={Group886} />
                        </div>
                    </div>
                    <div className="delevering_card_wrapper_inner">
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={position}></img>
                                    <h1>Position </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={read}></img>
                                    <h1>Readiness </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='1500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={timeline}></img>
                                    <h1>Timeline</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='2000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={matrix}></img>
                                    <h1>Matrix and Tracking</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <img src={Line24} className="line24" />
                <div className="delevering_card_wrapper1">
                    <div data-aos='zoom-in' data-aos-duration="2500">
                        <div className="intended_card_head">
                            <h1 id="competitor_analysis">Vision Remapping</h1>
                            <img src={Group886} />

                        </div>
                    </div>
                    <div className="delevering_card_wrapper_inner">
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='1000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={corpVision}></img>
                                    <h1>Corporate Vision</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={marketObj}></img>
                                    <h1>Marketing Objective</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='2000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={outcome}></img>
                                    <h1>Outcome model</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <img src={Line25} className="line25" />
                <div className="delevering_card_wrapper1">
                    <div data-aos='zoom-in' data-aos-duration="2500">
                        <div className="intended_card_head" >
                            <h1 >Strategizing and Planning</h1>
                            <img src={Group886} />

                        </div>
                    </div>
                    <div className="delevering_card_wrapper_inner">
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={scope}></img>
                                    <h1>Scoping</h1>
                                </div>

                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={budget}></img>
                                    <h1>Budgeting</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={strategizing}></img>
                                    <h1>Strategizing</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='2000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={taskPlan}></img>
                                    <h1>Task Planning</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <img src={Line26} className="line26" />
                <div className="delevering_card_wrapper1">
                    <div data-aos='zoom-in' data-aos-duration="2500">
                        <div className="intended_card_head">
                            <h1>Task Force and Execution</h1>
                            <img src={Group886} />

                        </div>
                    </div>
                    <div className="delevering_card_wrapper_inner">
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='1000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={techStack}></img>
                                    <h1 id="collecting">Tech Stack</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={schedule}></img>
                                    <h1>Scheduling</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='2000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={implementation}></img>
                                    <h1>Implementation</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='2500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={segment}></img>
                                    <h1>Segmentation and Matrix</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Line27} className="line27" />
                <div className="delevering_card_wrapper1">
                    <div data-aos='zoom-in' data-aos-duration="2500">
                        <div className="intended_card_head">
                            <h1>Asset Buiding</h1>
                            <img src={Group886} />
                        </div>
                    </div>
                    <div className="delevering_card_wrapper_inner">
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={knowledge}></img>
                                    <h1>Knowledge Based</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={system}></img>
                                    <h1>System Preparation</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={Line27} className="line27" />
                <div className="delevering_card_wrapper1">
                    <div data-aos='zoom-in' data-aos-duration="2500">
                        <div className="intended_card_head">
                            <h1>Plan Ahead</h1>
                            <img src={Group886} />
                        </div>
                    </div>
                    <div className="delevering_card_wrapper_inner">
                        <div data-aos='flip-left' data-aos-duration="2500" data-aos-delay='500'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation1">
                                    <img src={future}></img>
                                    <h1>Future beyond 52 weeks</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration="2500" data-aos-delay='1000'>
                            <div className="delevering_card">
                                <div className="delevering_card_animation2">
                                    <img src={end}></img>
                                    <h1>End goal setting</h1>
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
