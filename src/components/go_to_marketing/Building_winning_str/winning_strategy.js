import React,{useEffect} from 'react';
import './img/Rectangle 58.png'
import './winning_strategy.css'
import DescriptionAnimation from '../maketing_banner/descanimation';

function Winning_strategy() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var textWrapper = document.querySelector('.buildingSection h1');
                textWrapper.classList.add('two');
            }
            else {
                var textWrapper = document.querySelector('.buildingSection h1');
                textWrapper.classList.remove('two');
            }
        })
    })

    useEffect(()=>{
        observer.observe(document.querySelector(".buildingSection"));
    })

    return (
        <div className="buildingSection" >
            <div className="buildingSection_heading">
                <div className="heading">
                    <div className="img1">

                    </div>
                    <div className="img2">

                    </div>
                    <div className="img3">

                    </div>
                    {/* <div className="img4">

                    </div> */}

                    <div class="banner">
                        <figure>
                            <div class="img4">
                            </div>
                        </figure>
                    </div>










                    <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out">

                        <h1 class="animate">
                            <span>B</span><span>U</span><span>I</span><span>L</span><span>D</span><span>I</span><span>N</span><span>G</span>&nbsp;
                            <span>W</span><span>I</span><span>N</span><span>N</span><span>I</span><span>N</span><span>G</span>&nbsp;
                            <span>S</span><span>t</span><span>r</span><span>a</span><span>t</span><span>e</span><span>g</span><span>y</span>&nbsp;
                            <span>W</span><span>H</span><span>I</span><span>L</span><span>E</span>&nbsp;
                            <span>C</span><span>A</span><span>R</span><span>E</span><span>F</span><span>U</span><span>L</span><span>L</span><span>Y</span>&nbsp;
                        </h1>
                    </div>


{/* <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out">
                    <h1 className="animate">
                     <span>u</span><span>n</span><span>i</span><span>q</span><span>u</span><span>e</span>&nbsp;
                      <span>v</span><span>a</span><span>l</span><span>u</span><span>e</span>&nbsp;
                       <span>p</span><span>r</span><span>o</span><span>p</span><span>o</span><span>s</span><span>i</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span></h1>
                </div> */}













                </div>

                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                    <p className="buildingSection_para">
                        {/* <span>Corporality</span><span>comes</span><span>with</span><span>a</span><span>deep</span><span></span><span>N</span><span>G</span>&nbsp; */}
                        Corporality comes with a deep understanding of market dynamics that impacts customer behaviour, buying cycles and much more. We evaluate both external and internal factors to overcome gaps and issues to build opportunities for the commercial success of your products and services.
                    </p>
                </div>



            </div>
        </div>
    )
}

export default Winning_strategy