import React from 'react'
import './marketfinding.css';
import Polygon33 from './img/Polygon 33.png';
import Polygon32 from './img/Polygon 32.png';
import Rectangle174 from './img/Rectangle 174.png';
export default function Marketfinding() {
    return (
        <div className='market_container'>
            <div className="main_container">
                <div className="market_finding">
                    <div className="market_finding_left">
                        <div data-aos="fade-right" data-aos-duration='2000'>
                            <img src={Polygon33} className="polygon33"></img>
                            <div className="rectangle174">
                                <img src={Rectangle174} ></img>
                            </div>
                            <img src={Polygon32} className="polygon32"></img>
                        </div>
                    </div>

                    <div className="market_finding_right">
                        <div data-aos="fade-left" data-aos-duration='2000'>
                            <h1>Finding new ways to bringing products and services to the market</h1>
                        </div>
                        <div data-aos="fade-left" data-aos-duration='2000' data-aos-delay="500">
                            <p>A solid GTM strategy drives the success of products and services in a new or an existing market. Coordinated messaging, precise product positioning and a clearly defined customer persona are all instrumental in the market progress of a product or service. Our effective digital marketing strategy also lays the foundation for developing newer products and services while keeping all business units aligned with the plan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
