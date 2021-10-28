import React from 'react'
import { useEffect} from 'react';
import '../css/style.css';
import '../css/blueprint.css';
import '../css/key.css';
import '../css/marketing.css';
import '../css/marketing_scroll.css';
import '../css/marketing_simple.css';
import '../css/pitch.css';
import '../css/process-animate.css';
import '../css/process.css';
import '../css/revamping.css';

import AOS from 'aos'; 


function HomePage() {
    useEffect(() =>{
      AOS.init();
      document.title = "Home"
    }, []);
    return (
      <div>
        {/*================Home Banner Area =================*/}
        <section className="home_banner_area">
          <div className="main-banner">
            <div className="banner_inner d-flex align-items-center">    
              <a href="#"><i className="fab fa-facebook-f fb-banner" /></a>
              <a href="#"><i className="fab fa-twitter twitter-banner" /></a>
              <a href="#"><i className="fa fa-instagram insta-banner" /></a>
              <a href="#"><i className="fab fa-linkedin-in linkedin-banner" /></a>
              <a href="#"><i className="fab fa-pinterest pintrest-banner" /></a>
              <a href="#"><i className="fab fa-youtube utube-banner" /></a>        
              <img src="./img/banner/Vector (1).png" className="img-back-up" />
              <div className="main-container"> {/*main container div*/}
                <div className="banner_bg">
                </div>
                <div className="banner_div" style={{marginTop: '-36%', paddingBottom: '24%'}}>
                  <div className="wrapper-blog">
                    <div className="fixed-wrapper-blog">
                      <div className="banner-left">
                        <img src="./img/banner/Rectangle 70.png" className="img-bottom-left" />
                        {/* <img src="./img/banner/Vector (1).png" class="img-back-up" /> */}
                        <img src="./img/banner/Rectangle 69.png" className="img-back-left" />
                      </div>
                    </div>{/*wrapper-div*/}
                  </div>{/*fixed-wrapper-div*/}
                  <div className="container" data-aos="fade-right" data-aos-duration={2000} data-aos-easing="ease-in-out" data-aos-offset={0}>
                    <div className="row">
                      <div className="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                        <div className="banner_content">
                          {/* <h3>Working with our clients</h3> */}
                          {/* <h5 class="banner-h5">EFFECTIVE DIGITAL MEDIA MARKETING STRATEGY FOR SMALL AND LARGE BUSINESS</h5> */}
                          <h5 className="ml13-banner">EFFECTIVE DIGITAL MEDIA MARKETING STRATEGY FOR SMALL AND LARGE BUSINESS</h5>
                          {/* <h1 class="ml9-banner">
                            <span class="text-wrapper-banner">
                              <span class="letters-banner">EFFECTIVE DIGITAL MEDIA MARKETING STRATEGY FOR SMALL AND LARGE BUSINESS</span>
                            </span>
                          </h1> */}
                          <p className="banner-p">Head to toe strategy focused Digital Media Marketing
                          </p>
                          <button id="banner-btn">Book Your Discovery Session</button>
                          {/* <a class="banner_btn" href="#">Begin Free Trial<i class="ti-arrow-right"></i></a> */}
                        </div>
                      </div>
                      <div className="banner-image" style={{position: 'absolute', zIndex: 1}}>
                        <img src="./img/banner/Rectangle 64.png" className="banner-img-bottom-left" data-aos="zoom-in" data-aos-duration={2000} data-aos-easing="ease-in-out" data-aos-offset={0} />
                      </div>
                      <div className="banner-animate" style={{position: 'absolute', zIndex: 1, marginTop: '-40px'}}>
                        <div className="wrapper-blog">
                          <div className="fixed-wrapper-blog">
                            <span className="pulse-banner" style={{marginLeft: '887%', marginTop: '165%'}} />
                            <img src="./img/banner/call 1.png" className="banner-img-bottom-call" style={{marginLeft: '895%'}} />
                          </div>
                        </div>
                        {/* <a href="#">
                        <p class="banner-call-text">+61 2 83794089</p>
                    </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/*container div*/}
            </div>
          </div>
        </section>
        {/*================End Home Banner Area =================*/}
        {/* ================ Pitch section starts ================   */}
        <section className="pitch-area">
          <div className="main-pitch">
            <div className="main-container"> {/*main container div*/}
              <h4 className="ml7-pitch">
                <span className="text-wrapper-pitch">
                  <span className="letters-pitch">FROM PITCH TO PICTURE PERFECT SCENARIO</span>
                </span>
              </h4>
              <p className="pitch-p"> The process of starting a digital media marketing with Corporality Global -An innovative lead generation and marketing company in Sydney, and approaching the right strategy can be highly intended to your true audience. We’ve created this service Edition to accompany founders in this journey, from getting their vision and approaching potential buyers' persona naturally.</p>
              <img src="./img/perfect-scenario/pitch_bg.png" className="pitch-bg" />
              <h3 className="first-card-h3">PLANNING PHASE</h3>
              {/* first row */}
              <div className="card-container">
                {/* card-1 */}
                <div className="card-1" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={500}>
                  <img src="./img/perfect-scenario/audit-1.png" className="card-1-img" />
                  <h3 className="card-1-h3">Marketing Audit</h3>
                </div>
                {/* card-2 */}
                <div className="card-2" data-aos="flip-left" data-aos-duration={3000} data-aos-delay={1000}>
                  <img src="./img/perfect-scenario/browser.png" className="card-2-img" />
                  <h3 className="card-2-h3">Inbound Marketing Concept to proposed plan</h3>
                </div>
                {/* card-3 */}
                <div className="card-3" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={1500}>
                  <img src="./img/perfect-scenario/brain.png" className="card-3-img" />
                  <h3 className="card-3-h3">Master minding workshop</h3>
                </div>
                {/* card-4 */}
                <div className="card-4" data-aos="flip-left" data-aos-duration={3000} data-aos-delay={2000}>
                  <img src="./img/perfect-scenario/presentation-1.png" className="card-4-img" />
                  <h3 className="card-4-h3">Presentation and Accountability</h3>
                </div>
                {/* card-5 */}
                <div className="card-5" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={2500}>
                  <img src="./img/perfect-scenario/talent-management-1.png" className="card-5-img" />
                  <h3 className="card-5-h3">Talent Alignment</h3>
                </div>
                {/* card-6 */}
                <div className="card-6" data-aos="flip-left" data-aos-duration={3000} data-aos-delay={3000}>
                  <img src="./img/perfect-scenario/plan.png" className="card-6-img" />
                  <h3 className="card-6-h3">Strategy Preparation</h3>
                </div>
              </div>
              <h3 className="second-card-h3">PREP PHASE</h3>
              {/* second row */}
              <div className="card-container-1">
                {/* card-1 */}
                <div className="card-7" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={500}>
                  <img src="./img/perfect-scenario/interactive-1.png" className="card-7-img" />
                  <h3 className="card-7-h3">Channel Targeting</h3>
                </div>
                {/* card-2 */}
                <div className="card-8" data-aos="flip-left" data-aos-duration={3000} data-aos-delay={1000}>
                  <img src="./img/perfect-scenario/digital-campaign-1.png" className="card-8-img" />
                  <h3 className="card-8-h3">Social Media Marketing Strategy</h3>
                </div>
                {/* card-3 */}
                <div className="card-9" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={1500}>
                  <img src="./img/perfect-scenario/content-1.png" className="card-9-img" />
                  <h3 className="card-9-h3">Content Strategy</h3>
                </div>
                {/* card-4 */}
                <div className="card-10" data-aos="flip-left" data-aos-duration={3000} data-aos-delay={2000}>
                  <img src="./img/perfect-scenario/search-engine.png" className="card-10-img" />
                  <h3 className="card-10-h3">SEO Strategy</h3>
                </div>
                {/* card-5 */}
                <div className="card-11" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={2500}>
                  <img src="./img/perfect-scenario/seo-1.png" className="card-11-img" />
                  <h3 className="card-11-h3">Social Searches Strategy</h3>
                </div>
                {/* card-6 */}
                <div className="card-12" data-aos="flip-left" data-aos-duration={3000} data-aos-delay={3000}>
                  <img src="./img/perfect-scenario/email-marketing-1.png" className="card-12-img" />
                  <h3 className="card-12-h3">Email Marketing Approach</h3>
                </div>
              </div>
              <h3 className="third-card-h3">EXECUTION PHASE</h3>
              {/* third row */}
              <div className="card-container-2">
                {/* card-1 */}
                <div className="card-13" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={500}>
                  <img src="./img/perfect-scenario/search-5.png" className="card-13-img" />
                  <h3 className="card-13-h3">On-page SEO Implementation</h3>
                </div>
                {/* card-2 */}
                <div className="card-14" data-aos="flip-left" data-aos-duration={3000} data-aos-delay={1000}>
                  <img src="./img/perfect-scenario/optimize-2.png" className="card-14-img" />
                  <h3 className="card-14-h3">Off-page SEO Action defined</h3>
                </div>
                {/* card-3 */}
                <div className="card-15" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={1500}>
                  <img src="./img/perfect-scenario/web-search-engine-1.png" className="card-15-img" />
                  <h3 className="card-15-h3">Search Engine Marketing</h3>
                </div>
                {/* card-4 */}
                <div className="card-16" data-aos="flip-left" data-aos-duration={3000} data-aos-delay={2000}>
                  <img src="./img/perfect-scenario/blog-1.png" className="card-16-img" />
                  <h3 className="card-16-h3">Content Preparation</h3>
                </div>
                {/* card-5 */}
                <div className="card-17" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={2500}>
                  <img src="./img/perfect-scenario/test-3.png" className="card-17-img" />
                  <h3 className="card-17-h3">A/B Testing on Inbound Strategy</h3>
                </div>
              </div>
              {/* fourth row */}
              <div className="card-container-3">
                {/* card-1 */}
                <div className="card-18" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={500}>
                  <img src="./img/perfect-scenario/test-4.png" className="card-18-img" />
                  <h3 className="card-18-h3">Test, Tweak and treat</h3>
                </div>
                {/* card-2 */}
                <div className="card-19" data-aos="flip-left" data-aos-duration={3000} data-aos-delay={1000}>
                  <img src="./img/perfect-scenario/growth.png" className="card-19-img" />
                  <h3 className="card-19-h3">Performance and Benchmarking</h3>
                </div>
                {/* card-3 */}
                <div className="card-20" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={1500}>
                  <img src="./img/perfect-scenario/graph.png" className="card-20-img" />
                  <h3 className="card-20-h3">Reporting and Feedback</h3>
                </div>
                {/* card-4 */}
                <div className="card-21" data-aos="flip-left" data-aos-duration={3000} data-aos-delay={2000}>
                  <img src="./img/perfect-scenario/checklist.png" className="card-21-img" />
                  <h3 className="card-21-h3">ROI Evaluation</h3>
                </div>
                {/* card-5 */}
                <div className="card-22" data-aos="flip-right" data-aos-duration={3000} data-aos-delay={2500}>
                  <img src="./img/perfect-scenario/3d-modeling-1.png" className="card-22-img" />
                  <h3 className="card-22-h3">Maturation Model</h3>
                </div>
                {/* width:23;height:625; */}
              </div>
              <h3 className="fourth-card-h3">MONITORING PHASE</h3>
            </div>{/*container div*/}
          </div>
        </section>
        {/* ================ Pitch section end ================   */}
        {/*================revamping section Area =================*/}
        <section className="revamping">
          <div className="main-banner">
            <div className="banner_inner d-flex align-items-center">            
              <div className="main-container"> {/*main container div*/}
                <div className="banner_div" style={{marginTop: '-36%', paddingBottom: '24%'}}>
                  <div className="wrapper-blog">
                    <div className="fixed-wrapper-blog">
                      <div className="banner-left">
                        <img src="./img/revamping/DesignThinking1.gif" className="img-revamping-main" />
                      </div>
                    </div>{/*wrapper-div*/}
                  </div>{/*fixed-wrapper-div*/}
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                        <div className="revamping_content">
                          {/* <h3>Working with our clients</h3> */}
                          {/* <h5 class="revamping-h5">THINKING OF CREATING A WEBSITE OR REVAMPING YOURS?</h5> */}
                          {/* <h1 class="ml9-revamping">
                                <span class="text-wrapper-revamping">
                                  <span class="letters-revamping">THINKING OF CREATING A WEBSITE OR REVAMPING YOURS?</span>
                                </span>
                              </h1> */}
                          <h5 className="ml13-revamping">THINKING OF CREATING A WEBSITE OR REVAMPING YOURS?</h5>
                          <p className="revamping-p" data-aos="fade-right" data-aos-duration={2000} data-aos-easing="ease-in-out" data-aos-offset={0}>Have you considered planning before executing? Our Website Masterplan will take you to a profitable Website blueprint journey that will drive sales to your business by enhancing your website’s most potent weapon: great customer experience (CX).
                          </p>
                          <button id="revamping-btn">Talk To Us</button>
                          {/* <a class="banner_btn" href="#">Begin Free Trial<i class="ti-arrow-right"></i></a> */}
                        </div>
                      </div>
                      <img src="./img/revamping/revamping-1.png" className="img-revamping-arrow" />
                    </div>
                  </div>
                </div>
              </div>{/*container div*/}
            </div>
          </div>
        </section>
        {/*================End revamping section Area =================*/}   
        {/* ================ Website Blueprint starts ================   */}
        <section className="blueprint-area">
          <div className="main-blueprint">
            <div className="main-container"> {/*main container div*/}
              {/* <h4 class="blueprint-h4">THE WEBSITE BLUEPRINT MASTER PLAN</h4> */}
              <h4 className="ml10-blueprint">
                <span className="text-wrapper-blueprint">
                  <span className="letters-blueprint">THE WEBSITE BLUEPRINT MASTER PLAN</span>
                </span>
              </h4>
              <p className="blueprint-p" data-aos="fade-down" data-aos-easing="ease" data-aos-duration={2500}><span style={{color: '#757575'}}>The Corporality Website blueprint Masterplan is a strategic process to construct your virtual office. Our website design, development experts and dedicated team will work closely with you and start with</span>
                <span style={{color: '#a06db0'}}>hands-on brainstorming sessions to achieve your marketing objective through this website blueprint. It’s an intense, multi-layer process, but the final outcome is priceless.</span>
                <span style={{color: '#757575'}}>Initiate your best customer experience with the Corporality Website MasterPlan, and you will have a customer-centric conversion-based website that will sell for you.</span></p>
              <img src="./img/blueprint/website blueprint.jpg" className="blueprint-img" />
            </div>{/*container div*/}
          </div>
        </section>
        {/* ================ Website Blueprint section end ================   */}   
        {/* ================ The Process starts ================   */}
        <section className="process-area">
          <div className="main-process">
            <div className="main-container"> {/*main container div*/}
              {/* <h4 class="process-h4">THE PROCESS</h4> */}
              <h1 className="ml9-process">
                <span className="text-wrapper-process">
                  <span className="letters-process">
                    THE PROCESS
                  </span>
                </span>
              </h1>
              {/* <h5 class="ml2-process">THE PROCESS</h5> */}
              <p className="process-p" data-aos="fade-down" data-aos-easing="ease" data-aos-duration={2500}>Making split-second decisions are standard in every business. Establishing a dynamic GTM strategy will help you align your team with the same goals. A GTM strategy will also assist you with:</p>
              <div className="container mt-5">
                <div className="row mt-5">
                  {/* card-1 */}
                  <div className="col-md-4 mt-5">
                    {/* <a href="https://www.youtube.com/watch?v=LtBAKqn0oPQ&t=4s" target="_blank"> */}
                    <div className="content-inner fl-wrap">
                      <div className="content-front">
                        <div className="cf-inner">
                          <div className="bg" style={{backgroundImage: 'url("../img/process/initial\ extraction.png")', backgroundPosition: '2px 60px'}} />
                          <div className="overlay" />
                          <div className="inner">
                            <h2>INITIAL EXTRACTION</h2>
                          </div>
                        </div>
                      </div>
                      <div className="content-back">
                        <div className="cf-inner">
                          <div className="inner1">
                            <h2>INITIAL EXTRACTION</h2>
                            <p>Discover your brand and redesign goals and how you’ll measure your project’s success</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card-2 */}
                  <div className="col-md-4 mt-5">
                    <div className="content-inner fl-wrap">
                      <div className="content-front">
                        <div className="cf-inner">
                          <div className="bg " style={{backgroundImage: 'url("../img/process/competitive\ analysis.png")', backgroundPosition: '2px 60px'}} />
                          <div className="overlay" />
                          <div className="inner">
                            <h2>COMPETITIVE ANALYSIS</h2>
                          </div>
                        </div>
                      </div>
                      <div className="content-back">
                        <div className="cf-inner">
                          <div className="inner1">
                            <h2>COMPETITIVE ANALYSIS</h2>
                            <p>Find the competitive edge and list of competitors for each service/ product</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card-3 */}
                  <div className="col-md-4 mt-5">
                    <div className="content-inner fl-wrap">
                      <div className="content-front">
                        <div className="cf-inner">
                          <div className="bg" style={{backgroundImage: 'url("../img/process/high\ impact\ content.png")', backgroundPosition: '2px 55px'}} />
                          <div className="overlay" />
                          <div className="inner">
                            <h2>HIGH-IMPACT CONTENT</h2>
                          </div>
                        </div>
                      </div>
                      <div className="content-back">
                        <div className="cf-inner">
                          <div className="inner1">
                            <h2>HIGH-IMPACT CONTENT</h2>
                            <p>Educate and sell to your customers at the same time - let’s make a powerful Content marketing Strategy with high impact and recall.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card-4 */}
                  <div className="col-md-4 mt-5" style={{marginLeft: '15%'}}>
                    {/* <a href="https://www.youtube.com/watch?v=LtBAKqn0oPQ&t=4s" target="_blank"> */}
                    <div className="content-inner fl-wrap">
                      <div className="content-front">
                        <div className="cf-inner">
                          <div className="bg" style={{backgroundImage: 'url("../img/process/layout\ and\ layers.png")', backgroundPosition: '2px 60px'}} />
                          <div className="overlay" />
                          <div className="inner">
                            <h2>LAYOUT AND LAYERS</h2>
                          </div>
                        </div>
                      </div>
                      <div className="content-back">
                        <div className="cf-inner">
                          <div className="inner1">
                            <h2>LAYOUT AND LAYERS</h2>
                            <p>Functionality, system integration, technical, and accessibility requirements</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card-5 */}
                  <div className="col-md-4 mt-5">
                    <div className="content-inner fl-wrap">
                      <div className="content-front">
                        <div className="cf-inner">
                          <div className="bg " style={{backgroundImage: 'url("../img/process/sitemap.png")', backgroundPosition: '2px 60px'}} />
                          <div className="overlay" />
                          <div className="inner">
                            <h2>SITEMAP</h2>
                          </div>
                        </div>
                      </div>
                      <div className="content-back">
                        <div className="cf-inner">
                          <div className="inner1">
                            <h2>SITEMAP</h2>
                            <p>An initial site map and easy navigation setup across the website</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* cursor */}
              {/* <div class="custom-cursor"></div> */}
              {/* /cursor */}
            </div>{/*container div*/}
          </div>
        </section>
        {/* ================ The Process section end ================   */}
        {/* ================ Marketing Audit starts ================   */}
        <section className="marketing-area">
          <div className="main-marketing">
            <div className="main-container"> {/*main container div*/}
              <div className="row">
                <div className="col-6 marketing-col1">
                  {/* <img src="./img/marketing audit/marketing audit.png" class="marketing-img"> */}
                  {/* <img src="./img/marketing audit/Scope.png" class="scope-ma"> */}
                  <header className="header show-on-scroll">
                    <div className="main-photo" />
                    {/* <h1 class="heading">When the moon hits your eye</h1> */}
                    <img src="./img/marketing audit/Scope.png" className="scope-ma" /> 
                    <img src="./img/marketing audit/Circle_ma.jpg" className="circle-ma" />
                    <img src="./img/marketing audit/curve_ma.png" className="curve-ma" />
                  </header>
                  <div className="fade fade1"><img src="./img/marketing audit/card1_ma.png" className="card1-ma" /></div>
                  <div className="fade fade2"><img src="./img/marketing audit/card2_ma.png" className="card2-ma" /></div>
                  <div className="fade fade3"><img src="./img/marketing audit/card3_ma.png" className="card3-ma" /></div>
                  <div className="fade fade4"><img src="./img/marketing audit/card4_ma.png" className="card4-ma" /></div>
                  <div className="fade fade5"><img src="./img/marketing audit/LINE-1.png" className="line1-ma" /></div>
                  <div className="fade fade6"><img src="./img/marketing audit/LINE-2.png" className="line2-ma" /></div>
                  <div className="fade fade7"><img src="./img/marketing audit/LINE-3.png" className="line3-ma" /></div>
                  <div className="fade fade8"><img src="./img/marketing audit/LINE-4.png" className="line4-ma" /></div>
                </div>
                <div className="col-6 marketing-col2">
                  <h4 className="marketing-h4" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={2500}>MARKETING AUDIT AND RECOMMENDATIONS</h4>
                  <p className="marketing-p1" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={2500}>Sometimes the most complex challenge requires the simplest of solutions - the trick is to possess the ability to recognise the solution.  With the rare ability to identify, recommend and simultaneously mitigate challenges using in depth analytics and operational evaluation, Corporality Global conducts audits across your marketing landscape to provide enjoinders that boost business goals and growth.</p>
                  <p className="marketing-sub-h5" data-aos="fade-up" data-aos-easing="ease" data-aos-duration={2500}>Our strategies will :</p>
                  <ul className="marketing-our_strategies-li">
                    <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration={1500}>
                      <img src="./img/key objectives/key.png" className="marketing-key-img" />
                      <p className="marketing-li_element">Streamline your traditional and digital marketing management processes</p>
                    </li>
                    <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration={2000}>
                      <img src="./img/key objectives/key.png" className="marketing-key-img" />
                      <p className="marketing-li_element">Address inefficiencies while augmenting efficacy</p>
                    </li>
                    <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration={2500}>
                      <img src="./img/key objectives/key.png" className="marketing-key-img" />
                      <p className="marketing-li_element">Cut down on unnecessary costs</p>
                    </li>
                    <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
                      <img src="./img/key objectives/key.png" className="marketing-key-img" />
                      <p className="marketing-li_element">Improve marketing ROIs</p>
                    </li>
                  </ul>
                  <p className="marketing-p2" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={2500}>Get a fresh perspective with the help of technology to establish the power of your brand. It is extremely crucial to substantiate your marketing spend to keep your overall business performance in check.</p>
                </div>
              </div>      
            </div>{/*container div*/}
          </div>
        </section>
        {/* ================ Marketing Audit section end ================   */}
        {/* ================ Key Objectives starts ================   */}
        <section className="key-area">
          <div className="main-key">
            <div className="main-container"> {/*main container div*/}
              <div className="row">
                <div className="col-6 key-col1">
                  <h4 className="key-h4" data-aos="fade-left" data-aos-easing="ease" data-aos-duration={2500}>KEY OBJECTIVES</h4>
                  <p className="key-p1" data-aos="fade-left" data-aos-easing="ease" data-aos-duration={2500}>The key objective is to align all short-term and long-term business goals in order of their priority and accomplish them over the next two to three years. Create the ideal buyer persona, identify competition and describe products and services, to map out a detailed inventory encompassing your marketing assets.</p>
                  <ul className="key-li">
                    <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration={1000}>
                      <img src="./img/key objectives/key.png" className="key-diamond-img" />
                      <p className="key-li1">Augmenting company visibility</p>
                    </li>
                    <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration={1500}>
                      <img src="./img/key objectives/key.png" className="key-diamond-img" />
                      <p className="key-li2">Increasing the size of the audience with corporate or business level strategy</p>
                    </li>
                    <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration={2000}>
                      <img src="./img/key objectives/key.png" className="key-diamond-img" />
                      <p className="key-li1">Differentiating you from competition</p>
                    </li>
                    <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration={2500}>
                      <img src="./img/key objectives/key.png" className="key-diamond-img" />
                      <p className="key-li1">Market share increase and maintenance</p>
                    </li>
                    <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
                      <img src="./img/key objectives/key.png" className="key-diamond-img" />
                      <p className="key-li1">Generating qualified leads with effective lead generation strategy</p>
                    </li>
                    <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration={2000}>
                      <img src="./img/key objectives/key.png" className="key-diamond-img" />
                      <p className="key-li1">Customer engagement and usage</p>
                    </li>
                  </ul>
                  <p className="key-p2" data-aos="fade-left" data-aos-easing="ease" data-aos-duration={2500}>A detailed marketing audit under your belt helps you provide marching orders that are strategically aligned towards your marketing goals.</p>
                </div>
                <div className="col-6 key-col2">
                  <img src="./img/key objectives/objective.gif" className="key-img" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={2500} />
                </div>
              </div>      
            </div>{/*container div*/}
          </div>
        </section>
        {/* ================ Key Objectives section end ================   */}
      </div>
    );
}

export default HomePage;