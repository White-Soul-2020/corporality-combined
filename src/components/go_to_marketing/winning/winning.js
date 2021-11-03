import React,{useEffect} from 'react';
import './winning.css';
import customer from './img/Customer Analysis.png'
import drafting from './img/Drafting a USP 1.png'
import market from './img/Market Research.png'
import product from './img/Product Research.png'
import prospecting from './img/Prospecting.png'
import qualify from './img/Qualifying deals and crafting proposals.png'
import soution from './img/Solutions to customer pain points.png'
import vector from './img/Vector.png';

function WinningSection() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var textWrapper = document.querySelector('.winningSection h1');
                textWrapper.classList.add('two');
            }
            else {
                var textWrapper = document.querySelector('.winningSection h1');
                textWrapper.classList.remove('two');
            }
        })
    })

    useEffect(()=>{
        observer.observe(document.querySelector(".winningSection"));
    })


    return (
        <div className="winningSection bgAnimation">
            <ul class="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>




            <div className="winningSection_heading">
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out">
                    {/* <h1 id="title">WINNING PRE SALES PROCESSES THAT IMPACT YOUR PRODUCT SALES</h1> */}
                    <h1 class="animate">
                                <span>W</span><span>I</span><span>N</span><span>N</span><span>I</span><span>N</span><span>G</span>&nbsp;
                                <span>P</span><span>R</span><span>E</span>&nbsp;
                                <span>S</span><span>A</span><span>L</span><span>E</span><span>S</span>&nbsp;
                                <span>P</span><span>R</span><span>O</span><span>C</span><span>E</span><span>S</span><span>S</span><span>E</span><span>S</span>&nbsp;
                                <span>T</span><span>H</span><span>A</span><span>T</span>&nbsp;
                                <span>I</span><span>M</span><span>P</span><span>A</span><span>C</span><span>T</span>&nbsp;
                                <span>Y</span><span>O</span><span>U</span><span>R</span>&nbsp;
                                <span>P</span><span>R</span><span>O</span><span>D</span><span>U</span><span>C</span><span>T</span>&nbsp;
                                <span>S</span><span>A</span><span>L</span><span>E</span><span>S</span>&nbsp;
                            </h1>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                    <p className="winningSection_para">Boost your bottom line with a strong sales pipeline as you allocate the right resources at the right places, at the right time. Pre-sales is critical to the success of every opportunity that comes your way.</p>
                </div>
            </div>

            {/* content */}
            <div className="vectordiv">
            <img src={vector} id="vector_img"></img>
            </div>
            <div className="winningSection_content">

                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="400">
                    <div className="winningSection_box">
                        <div className="image_container">
                            <img src={product}></img>
                        </div>
                        <p>Product Research</p>

                    </div>
                </div>

                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="800">
                    <div className="winningSection_box">
                        <div className="image_container">
                            <img src={market}></img>
                        </div>
                        <p>Market Research</p>

                    </div>
                </div>



                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1200">
                    <div className="winningSection_box">
                        <div className="image_container">
                            <img src={customer}></img>
                        </div>
                        <p>Customer Analysis</p>

                    </div>
                </div>




                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1600">
                    <div className="winningSection_box">
                        <div className="image_container">
                            <img src={prospecting}></img>
                        </div>
                        <p>Prospecting</p>

                    </div>
                </div>



            </div>

            <div className="winningSection_content">


                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="2000">
                    <div className="winningSection_box">
                        <div className="image_container">
                            <img src={qualify}></img>
                        </div>
                        <p>Qualifying deals and crafting proposals</p>

                    </div>
                </div>



                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="2400">
                    <div className="winningSection_box">
                        <div className="image_container">
                            <img src={drafting}></img>
                        </div>
                        <p>Drafting a USP</p>

                    </div>
                </div>


                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="2800">
                    <div className="winningSection_box">
                        <div className="image_container">
                            <img src={soution}></img>
                        </div>
                        <p>Solutions to customers pain points</p>

                    </div>
                </div>




            </div>



        </div>
    )

}

export default WinningSection
