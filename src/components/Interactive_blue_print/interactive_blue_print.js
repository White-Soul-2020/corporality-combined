import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import './interactive_blue_print.css';
import Navbar from '../navigation/navbar';
import Footer from '../footer/footer';

function Interactive_Blue_Print() {
    useEffect(() => {
        AOS.init();
    }, [])
   
    return (
        <div style={{ overflow: 'hidden' }}>
            <title>Corporality- Intractive Blue Print </title>
            <Navbar />
            <section className="blue_print_banner1">
                <div className="main-container">
                    <div className="blue_print_banner">
                        <div className="blue_print_banner_left">

                            <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="2500">
                                <h1>INTERACTIVE BLUEPRINT</h1>
                            </div>
                            <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="1000">
                                <p>100% customised plan that reduces risks and gives you an edge</p>
                            </div>

                            <img src="./img/banner/banner-5.png" />
                        </div>


                        <div className="blue_print_banner_right" >
                            <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration="2500">

                                <div className="blue_print_banner_image">

                                    <div className="banner_right_inner">
                                        <img src="./img/banner/Corporality-our impetus.png" />
                                    </div>
                                    <img src="./img/banner/Rectangle 6.png" className="blue_print_banner_image_bkg" />

                                </div>

                            </div>
                            <img src="./img/banner/banner-5.png" className="banner_right_img5" />
                            <img src="./img/banner/banner-4.png" className="banner_right_img4" />
                            <img src="./img/banner/banner-3.png" className="banner_right_img3" />
                        </div>
                    </div>
                </div>
                <div className="blue_print_overlay">
                    <div className="blue_print_ellipse-1"></div>

                </div>

            </section>







            {/* <!--================Strat of DIGITAL AND TECHNOLOGICAL SUSTAINABILITY Area =================--> */}

            <section className="bp_our-faith">

                <div className="bp_our-faith-main">
                    <div className="bp_our-faith-bkg">
                        <div className="bp_our-faith-rect7">
                            <img src="./img/Our-Faith/Rectangle 7.png" alt="" />
                        </div>
                        <div className="bp_our-faith-rect8">
                            <img src="./img/Our-Faith/Rectangle 8.png" alt="" />
                        </div>

                        <div className="bp_our-faith-rect9">
                            <img src="./img/Our-Faith/Rectangle 9.png" alt="" />
                        </div>
                    </div>
                    <div className="bp_our-faith-wrapper">
                        <div className="main-container">
                            <div className="bp_our-faith-back">

                                <div className="bp_our-faith-image">
                                    <div className="main-container">
                                        <div className="bp_our-faith-main-img">
                                            <div alt="" data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="10">
                                                <img src='./img/Our-Faith/Corporality-our impetus.png'></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bp_our-faith-vector">
                                        <img src="./img/Our-Faith/Vector.png" alt="" />
                                    </div>
                                    <img className="bp_our-faith-rect8-p" src="./img/Our-Faith/Rectangle 8-p.png" alt="" />
                                </div>

                                <div className="bp_our-faith-text">
                                    <div className='main-container'>
                                        <div data-aos="fade-left" data-aos-duration="2000">
                                            <h2 className="bp_our-faith-head">Strategic Master Plan</h2>
                                        </div>
                                        <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000">
                                            <p className="bp_our-faith-para">Corporality Global specialises in creating end to end user journeys through solid planning and inspiration.We empower our clients with tactics and strategies that really work.Our custom websites and applications deliver engaging brand messages and outstanding results in every pixel.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div class="bp_anm_container">
        
            <div class="bp_anm_container_img">
                <img src="./img/Frame 181.jpg" alt="" />
            </div>
            <div class="main_container">
                <div class="bp_anm_container_text" >
                    <h1>“We create fortified,<span >i</span>nteractive blueprints that impact businesses”</h1>
                    
                    
                </div>
            </div>
        
    </div>

            {/* <!--================End of DIGITAL AND TECHNOLOGICAL SUSTAINABILITY Faith Area =================-->
    <!--===============--> */}
            < div style={{ background: '#F8F8F8' }}>
                <div className="main-container">
                    <div className="bp_iwfc">

                        <div className="bp_iwfc_left" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img src='./img/iwfc/Vector.png' alt="" className="bp_iwfc_vector" />
                            <div className="bp_iwfc_img">
                                <img src='./img/iwfc/Corporality -fearless creativity (1).png' alt="" />
                            </div>

                            <div className="bp_iwfc_img4_bg">
                                <img src='./img/iwfc/Corporality -fearless creativity.png' alt="" />
                            </div>
                            <img src='./img/iwfc/Rectangle 8.png' alt="" className="bp_iwfc_img1" />

                            <img src='./img/iwfc/Rectangle 7.png' className="bp_iwfc_img2" />
                        </div>
                        <div className="bp_iwfc_right">

                            <div className="bp_iwfc_text_wrapper1">
                                <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                    <div className="bp_iwfc_text_wrapper2">
                                        <div className="bp_iwfc_icon" style={{ width: '60px' }}>
                                            <img src="./img/iwfc/favicon TM 3.png" alt="" />
                                        </div>
                                        <div className="bp_iwfc_text">
                                            <h3>Going beyond mere publishing goals</h3>
                                            <p>While using the latest and fully-functional technology stacks in the backend, we also ensure that the shift from the now to the next is impactful. We always aim to create a better and more connected world.</p>

                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="500">
                                    <div className="bp_iwfc_text_wrapper2">
                                        <div className="bp_iwfc_icon">
                                            <img src="./img/iwfc/favicon TM 4.png" alt="" />
                                        </div>
                                        <div className="bp_iwfc_text">
                                            <h3>We eliminate all guess works and make room for limitless growth</h3>
                                            <p>Companies are often stuck thinking about how to achieve their goals. We provide you with alternatives and recommendations that you would never have thought about before. Corporality helps you take the right steps to achieve outcomes that make you feel confident.</p>



                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1000">
                                    <div className="bp_iwfc_text_wrapper2">
                                        <div className="bp_iwfc_icon">
                                            <img src="./img/iwfc/favicon TM 3.png" alt="" />
                                        </div>
                                        <div className="bp_iwfc_text">
                                            <h3>Telling stories that make a difference</h3>
                                            <p>We understand your business and we know your requirements. Therefore, using extensive expertise and analytics, we create highly detailed plans tailor-made for your business. </p>

                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1500">
                                    <div className="bp_iwfc_text_wrapper2">
                                        <div className="bp_iwfc_icon">
                                            <img src="./img/iwfc/favicon TM 2 (1).png" alt="" />
                                        </div>
                                        <div className="bp_iwfc_text">
                                            <h3>CSR sustainability</h3>
                                            <p>Viewing fair business practices, we are completely committed to local communities, where we recognise issues that matter to them and build strategies around the company’s core competencies.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1000">
                                <div className="bp_iwfc_button">
                                    <a href="#">Learn More</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


            <div className="bp_customize_section">
                <div data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <h3>100% customised for your company’s Goals and budgets </h3>
                </div>
                <div data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="500">
                    <p>Website blueprints are never alike. Corporality Global takes utmost care in preparing blueprints that are customised for your business and meet your company’s objectives and budget goals. </p>
                </div>
                <div className="main-container">
                    <div className="bp_customize_card_wrapper">
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="500">
                            <div className="bp_cutomize_card">
                                <div className="bp_cutomize_card_img">
                                    <img src="./img/customize/explore.png" className='bp_customize_img' />

                                </div>
                                <div className="bp_cutomize_card_text">
                                    <h2>Explore</h2>
                                    <p>Tracking and measuring results and seeking the impact of the website on the business while exploring current marketing scenarios</p>

                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1000">
                            <div className="bp_cutomize_card">
                                <div className="bp_cutomize_card_img">
                                    <img src="./img/customize/audiance.png" className='bp_customize_img'></img>

                                </div>
                                <div className="bp_cutomize_card_text">
                                    <h2>Audience</h2>
                                    <p>Creating content targeted to a relevant consumer behaviour, after performing a high-level assessment of your current audience and their stages across the marketing funnel</p>

                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1500">
                            <div className="bp_cutomize_card">
                                <div className="bp_cutomize_card_img">
                                    <img src="./img/customize/design.png" className='bp_customize_img'></img>

                                </div>
                                <div className="bp_cutomize_card_text">
                                    <h2>Design</h2>
                                    <p>Differentiating businesses through intentional user experiences that aligns with brand requirements using mood boards, and outlining design expectations</p>

                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="2000">
                            <div className="bp_cutomize_card">
                                <div className="bp_cutomize_card_img">
                                    <img src="./img/customize/scope.png" className='bp_customize_img'></img>


                                </div>
                                <div className="bp_cutomize_card_text">
                                    <h2>Scope</h2>
                                    <p>Managing project scope and budgets while prioritising specific features and functionality</p>

                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="2500">
                            <div className="bp_cutomize_card">
                                <div className="bp_cutomize_card_img">
                                    <img src="./img/customize/conversion.png" className='bp_customize_img'></img>

                                </div>
                                <div className="bp_cutomize_card_text">
                                    <h2>Conversions</h2>
                                    <p>Increasing visitors and conversions while achieving marketing objectives by creating persuasive landing pages</p>

                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="3000">
                            <div className="bp_cutomize_card">
                                <div className="bp_cutomize_card_img">
                                    <img src="./img/customize/call to action analyst.png" className='bp_customize_img'></img>

                                </div>
                                <div className="bp_cutomize_card_text">
                                    <h2>Call to Action Analysis</h2>
                                    <p>Providing persuasive recommendations that coerce your prospects to take specific actions</p>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>






            {/* <!--==============Case Studies start from here ===========--> */}

            <section className="bp_our-newsletter">
                <div className="bp_our-newsletter-rect45-b">
                    <img src="./img/Out newsletter/Rectangle 45-b.png" alt="" />
                </div>
                <div className="bp_our-newsletter-vector">
                    <img src="./img/Out newsletter/Vector.png" alt="" />
                </div>
                <div className="bp_our-newsletter-rect48">
                    <img src="./img/Out newsletter/Rectangle 48.png" alt="" />
                </div>
                <div className="main-container">
                    <div className="bp_our-newsletter-main" >
                        <div className="bp_our-newsletter-rect44">
                            {/* <img src="./img/Out newsletter/Rectangle 44.png" alt="" /> */}
                        </div>
                        <div className="bp_our-newsletter-polygon9">
                            <div data-aos="fade-down-left" data-aos-duration="2000">
                                <img src="./img/Out newsletter/Polygon 9.png" alt="" />
                            </div>
                        </div>

                        <div className="bp_our-newsletter-polygon8">
                            <img src="./img/Out newsletter/Polygon 8.png" alt="" />
                        </div>

                        <div className="bp_our-newsletter-rect45">
                            <img src="./img/Out newsletter/Rectangle 45.png" alt="" />
                        </div>
                        <div className="bp_our-newsletter-rect47">
                            <img src="./img/Out newsletter/Rectangle 47.png" alt="" />
                        </div>
                        
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000">
                        <div className="bp_our-newsletter-subscribe">
                            <button className="bp_care_to_join_button-subscribe">Explore</button>
                        </div>
                        <div className="bp_our-newsletter-text">
                            <h4 className="bp_our-newslatter-text-head">Eliminating Risks giving you an edge over others</h4>



                            <div className="bp_our-newslatter-text-para">
                                <p > <img src="./img/Out newsletter/Polygon 26.png" />Drafting an accurate project scope and preventing bigger headaches along the road</p>
                                <p > <img src="./img/Out newsletter/Polygon 26.png" /> Improving team buy-in by ensuring team collaboration and stakeholder participation</p>
                                <p > <img src="./img/Out newsletter/Polygon 26.png" /> Project  breakage to manageable pieces allowing you manage workload and budgets efficiently</p>
                                <p > <img src="./img/Out newsletter/Polygon 26.png" /> Written plan along with comprehensive research and expert recommendations</p>

                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* <!--==============Case Studies end here ===========--> */}



            <Footer />

        </div >
    )
}
export default Interactive_Blue_Print
