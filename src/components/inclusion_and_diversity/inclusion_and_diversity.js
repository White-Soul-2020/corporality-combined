import React from 'react'
import './inclusion_and_diversity.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Navbar from '../navigation/navbar';
import Footer from '../footer/footer';
export default function Inclusion_and_diversity() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <title>Corporality- Inclusion and Diversity </title>
            <Navbar />
            <section className="Inc_Div_banner1">
                <div className="main-container">
                    <div className="Inc_Div_banner">
                        <div className="Inc_Div_banner_left">
                            <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="2500">
                                <h2>Inclusion and Diversity</h2>
                            </div>
                            <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="700">
                                <h1>Creating a culture of equality</h1>
                            </div>
                            <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="1500">
                                <p>Everyone is equal and the right person always deserves the right opportunities.</p>
                            </div>

                            <img src="./img/banner/banner-5.png" />
                        </div>


                        <div className="Inc_Div_banner_right" >
                            <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration="2500">

                                <div className="Inc_Div_banner_image">

                                    <div className="banner_right_inner">
                                        <img src="./img/banner/inclusion_diversity_main_img.png" />
                                    </div>
                                    <img src="./img/banner/Rectangle 6.png" className="Inc_Div_banner_image_bkg" />

                                </div>

                            </div>
                            <img src="./img/banner/banner-5.png" className="Inc_Div_banner_right_img5" />
                            <img src="./img/banner/banner-4.png" className="Inc_Div_banner_right_img4" />
                            <img src="./img/banner/banner-3.png" className="Inc_Div_banner_right_img3" />
                        </div>
                    </div>
                </div>
                <div className="Inc_Div_overlay">
                    <div className="Inc_Div_ellipse-1"></div>

                </div>

            </section>



            <section className="Inc_Div_our-faith">

                <div className="Inc_Div_our-faith-main" >

                    <div className="Inc_Div_our-faith-bkg">
                        <div className="Inc_Div_our-faith-rect7">
                            <img src="./img/Our-Faith/Rectangle 7.png" alt="" />
                        </div>
                        <div className="Inc_Div_our-faith-rect8">
                            <img src="./img/Our-Faith/Rectangle 8.png" alt="" />
                        </div>

                        <div className="Inc_Div_our-faith-rect9">
                            <img src="./img/Our-Faith/Rectangle 9.png" alt="" />
                        </div>
                    </div>
                    <div className="Inc_Div_our-faith-wrapper">
                        <div className="main-container">
                            <div className="Inc_Div_our-faith-back" >

                                <div className="Inc_Div_our-faith-image">
                                    <div className="main-container">
                                        <div className="Inc_Div_our-faith-main-img">
                                            <div alt="" data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="10">
                                                <img src='./img/Our-Faith/Inc_Div_main_image.png'></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Inc_Div_our-faith-vector">
                                        <img src="./img/Our-Faith/Vector.png" alt="" />
                                    </div>
                                    <img className="Inc_Div_our-faith-rect8-p" src="./img/Our-Faith/Rectangle 8-p.png" alt="" />
                                </div>

                                <div className="Inc_Div_our-faith-text" >
                                    <div className='main-container'>
                                        <div data-aos="fade-left" data-aos-duration="2000">
                                            <h2 className="Inc_Div_our-faith-head">Our Faith</h2>
                                        </div>
                                        <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000">
                                            <p className="Inc_Div_our-faith-para">
                                                Corporality Global sets high standards in ethics and integrity. As a company,
                                                we are committed to inclusion and diversity and believe in equal opportunities.
                                                We are regulated by our deep-rooted value-based principles, which also enable us to
                                                exceed our clients’ expectations. Our employee policies and programmes reinforce the
                                                need for inclusion, thus unleashing a spate of innovation driven by ethnicity, culture
                                                and backgrounds. Diversity is extremely powerful and the more the multiplicity, the better
                                                the creativity. Our human resources programmes have helped us gather a plethora of skills,
                                                knowledge and experiences that have a huge impact on business and expansion, in the long run.
                                                Corporality Global gives everyone a chance to win thus encouraging constructive communication,
                                                brainstorming and teambuilding, leading to the development of new ideas and in turn, happier
                                                employees

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            {/* <section className="Inc_Div_creativity_innovation">


                <div className="Inc_Div_container-creativity Inc_Div_container_solid">
                    <div className="main-container">
                        <div className="Inc_Div_title_wrapper">
                            <h1 className="Inc_Div_creativity_h1">Inclusivity and diversity forms a part of our motto 'Ideation with
                                fearless creativity'</h1>
                            <p className="Inc_Div_creativity_name" style={{ marginLeft: "-20%" }}>
                                Priya Mishra
                            </p>
                            <p className="Inc_Div_creativity_des" style={{ marginLeft: "-20%" }}>
                                CEO, Corporality Global
                            </p>
                        </div>
                    </div>
                </div>


                <div className="Inc_Div_container-creativity Inc_Div_container_image" aria-hidden="true">

                    <div className="main-container">
                        <div className="Inc_Div_title_wrapper">
                            <h1 className="Inc_Div_creativity_h11">Inclusivity and diversity forms a part of our motto 'Ideation with
                                fearless creativity'</h1>
                            <p className="Inc_Div_creativity_name1" style={{ marginLeft: "-20%" }}>
                                Priya Mishra
                            </p>
                            <p className="Inc_Div_creativity_des1" style={{ marginLeft: "-20%" }}>
                                CEO, Corporality Global
                            </p>
                        </div>
                    </div>

                </div>
            </section> */}
            <div class="In_Div_anm_container">

                <div class="In_Div_anm_container_img">
                    <img src="./img/Group 789.jpg" alt="" />
                </div>
                <div class="In_Div_anm_container_text">
                    <div class="In_Div_anm_upper_box">

                    </div>
                    <div class="In_Div_anm_middle_box" >
                        <h1 class="In_Div_anm_container_text-h1">Inclusivity and diversity forms a part of our motto ‘Ideation
                            w<span class="In_Div_anm_zoom-in">i</span>th fearless creativity’</h1>
                    </div>
                    <div class="In_Div_anm_lower_box">
                        <h3 className="anm-h3">Priya Mishra</h3>
                        <p>CEO, Corporality Global</p>
                    </div>

                </div>
            </div>


            <div className="Inc_Div_duty_container">
                <div className="Inc_Div_main-container">
                    <div className="Inc_Div_duty_heading" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <h1>A duty without boundaries</h1>
                    </div>
                    <div className="Inc_Div_duty_heading" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        data-aos-delay="1000">
                        <p>Diversity is extremely powerful and at Corporality Global, our employees thrive in their roles and
                            responsibilities. Here is how we view diversity in its glory</p>
                    </div>
                </div>
                <div className="main-container">
                    <div className="Inc_Div_duty_card_wrapper">
                        <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                            data-aos-delay="1000">
                            <div className="Inc_Div_duty_card">
                                <div className="Inc_Div_bord_top">

                                </div>
                                <div className="Inc_Div_duty_card_inner">
                                    <div className="Inc_Div_duty_card_img">
                                        <div className="Inc_Div_duty_card_img_inner">
                                            <img src="./img/duty/Polygon 10.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="Inc_Div_duty_card_text">
                                        <div className="Inc_Div_duty_card_heading">
                                            <h1>Gender inclusive</h1>
                                        </div>
                                        <div className="Inc_Div_duty_card_desc">
                                            <p>A gender balanced workplace empowers people while removing barriers to equal
                                                participation.
                                                All
                                                employees get to access rewards, resources and opportunities.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                            data-aos-delay="1500">
                            <div className="Inc_Div_duty_card">
                                <div className="Inc_Div_bord_top">

                                </div>
                                <div className="Inc_Div_duty_card_inner">
                                    <div className="Inc_Div_duty_card_img">
                                        <div className="Inc_Div_duty_card_img_inner">
                                            <img src="./img/duty/Polygon 11.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="Inc_Div_duty_card_text">
                                        <div className="Inc_Div_duty_card_heading">
                                            <h1>Ethnic diversity</h1>
                                        </div>
                                        <div className="Inc_Div_duty_card_desc">
                                            <p>Underrepresented communities must be embraced in the workplace. It fosters
                                                improved
                                                accessibility
                                                to newer markets.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                            data-aos-delay="2000">
                            <div className="Inc_Div_duty_card">
                                <div className="Inc_Div_bord_top">

                                </div>
                                <div className="Inc_Div_duty_card_inner">
                                    <div className="Inc_Div_duty_card_img">
                                        <div className="Inc_Div_duty_card_img_inner">
                                            <img src="./img/duty/Polygon 12.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="Inc_Div_duty_card_text">
                                        <div className="Inc_Div_duty_card_heading">
                                            <h1>Persons with disabilities</h1>
                                        </div>
                                        <div className="Inc_Div_duty_card_desc">
                                            <p>An equal contribution by everyone is crucial for business and organisational
                                                sustainability.
                                                Persons with disabilities can be highly productive individuals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                            data-aos-delay="2500">
                            <div className="Inc_Div_duty_card">
                                <div className="Inc_Div_bord_top">

                                </div>
                                <div className="Inc_Div_duty_card_inner">
                                    <div className="Inc_Div_duty_card_img">
                                        <div className="Inc_Div_duty_card_img_inner">
                                            <img src="./img/duty/Polygon 13.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="Inc_Div_duty_card_text">
                                        <div className="Inc_Div_duty_card_heading">
                                            <h1>Mental health priorities</h1>
                                        </div>
                                        <div className="Inc_Div_duty_card_desc">
                                            <p>A team that is mentally healthy can thrive and move forward. Businesses hiring
                                                high-performing employees must prioritize mental health, which is also crucial
                                                for
                                                the
                                                business.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="Inc_Div_corporality_video" style={{ marginTop: '0px', height: '500px', display: 'block' }}>
                <div className="main-container">

                    <div className="Inc_Div_video-corporality">
                        <img src=" ./img/video/bg.png" className="Inc_Div_video_imge" style={{ height: '500px', width: '668.44921875px' }} />
                        <p className="Inc_Div_howwework_video" style={{ marginTop: '-23%', marginLeft: '25%' }} >VIDEO</p>
                    </div>
                </div>
            </section>










            <section className="Inc_Div_wemake_ourservices" style={{ marginTop: '10px', marginBottom: '7%' }}>
                <div className="main-container">
                    <div className="Inc_Div_row">

                        <div className="Inc_Div_col-md-12">
                            <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <div className="Inc_Div_wemake_ourservics-card1" >


                                    <p style={{
                                        marginTop: '-250px',
                                        paddingLeft: '7%',
                                        paddingTop: '5%'
                                    }}>


                                        <span className="Inc_Div_wemake_community" style={{ color: '#3c708e' }}>Inclusion and
                                            diversity across our partnerships
                                        </span>
                                        <p className="Inc_Div_wemake_card1_desc" style={{
                                            paddingTop: '2%',
                                            paddingLeft: '0%',
                                            paddingRight: '35%',
                                            fontStyle: 'normal',
                                            fontWeight: 'normal',
                                            fontsize: '16px',
                                            lineHeight: '24px',
                                            color: '#757575',
                                            width: '672px'
                                        }}>
                                            Every partner shares a commitment and
                                            ideas only get better when discussed openly.
                                            A mix of people is the best way to get decisions going.
                                        </p>
                                    </p>

                                    <img src="./img/wemake/community-support-3.png" className="Inc_Div_cs1_img" />
                                    <img src="./img/wemake/community-support-2.png" className="Inc_Div_cs1_plane" />
                                    <div className="Inc_Div_cs1_pic">
                                        <img src="./img/wemake/Polygon 5.png" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Inc_Div_col-md-12" style={{ marginTop: '480px' }}>
                            <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="500">
                                <div className="Inc_Div_wemake_ourservics-card2" >
                                    <p className="Inc_Div_wemake_ourservics-card2-p1">
                                        <span className="Inc_Div_wemake_community" style={{
                                            fontStyle: 'normal',
                                            fontWeight: 'bold',
                                            fontSize: '32px',
                                            lineHeight: '32px',
                                            color: '#3c708e',
                                            marginLeft: '-0.4%'
                                        }}>Responsible leadership</span>
                                        <p className="Inc_Div_wemake_ourservics-card2-p2">
                                            Corporality Global’s leadership is constantly discussing
                                            diversity, inclusion and responsibility across the workplace.
                                            It ensures high employee contentment levels. </p>
                                    </p>
                                    <img src="./img/wemake/corporate-social-responsibility-3.png" className="Inc_Div_cs2_img" />
                                    <img src="./img/wemake/corporate-social-responsibility-2.png" className="Inc_Div_cs2_plane" />
                                    <div className="Inc_Div_cs2_pic" >
                                        <img src="./img/wemake/poly2.png" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="Inc_Div_innovation">
                <div className="Inc_Div_innovation-main">
                    <div className="Inc_Div_innovation-top-box">
                        <div>
                            <div className="main-container">
                                <div className="Inc_Div_innovation-upper-box" data-aos="flip-right" data-aos-duration="2000">
                                    <img src="./img/innovation/Rectangle 60.png" alt="" />
                                    <div className="Inc_Div_innovation-vector">
                                        <img src="./img/innovation/Vector.png" alt="" />
                                    </div>
                                    <div className="Inc_Div_innovation-text">
                                        <h4 className="Inc_Div_innovation-head">CAREERS</h4>
                                        <ul className="Inc_Div_innovation-cont">Innovation and More</ul>
                                    </div>
                                </div>
                            </div>
                            <div className="Inc_Div_innovation-main-back-rect5">
                                <img src="./img/innovation/Rectangle 5.png" alt="" />
                            </div>
                            <div className="Inc_Div_innovation-rect12">
                                <img src="./img/innovation/Rectangle 12.png" alt="" />
                            </div>
                            <div className="Inc_Div_innovation-rect8">
                                <img src="./img/innovation/Rectangle 8.png" alt="" />
                            </div>
                            <div className="Inc_Div_innovation-rect11">
                                <img src="./img/innovation/Rectangle 11.png" alt="" />
                            </div>
                            <div className="Inc_Div_innovation-rect7">
                                <img src="./img/innovation/Rectangle 7.png" alt="" />
                            </div>
                            <div className="Inc_Div_innovation-rect9">
                                <img src="./img/innovation/Rectangle 9.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>









            <section className="Inc_Div_our-newsletter">
                <div className="Inc_Div_our-newsletter-vector">
                    <img src="./img/Out newsletter/Vector.png" alt="" />
                </div>
                <div className="Inc_Div_our-newsletter-rect48">
                    <img src="./img/Out newsletter/Rectangle 48.png" alt="" />
                </div>


                <div className="Inc_Div_our-newsletter-rect45-b">
                    <img src="./img/Out newsletter/Rectangle 45-b.png" alt="" />
                </div>
                <div className="main-container">
                    <div className="Inc_Div_our-newsletter-main" >
                        <div className="Inc_Div_our-newsletter-rect44">
                            {/* <img src="./img/Out newsletter/Rectangle 44.png" alt="" /> */}
                        </div>
                        <div className="Inc_Div_our-newsletter-polygon9">
                            <div data-aos="fade-down-left" data-aos-duration="2000">
                                <img src="./img/Out newsletter/Inc_Div_Polygon 9.png" alt="" />
                            </div>
                        </div>

                        <div className="Inc_Div_our-newsletter-polygon8">
                            <img src="./img/Out newsletter/Polygon 8.png" alt="" />
                        </div>
                        <div className="Inc_Div_our-newsletter-rect47">
                            <img src="./img/Out newsletter/Rectangle 47.png" alt="" />
                        </div>
                        <div className="Inc_Div_our-newsletter-rect45">
                            <img src="./img/Out newsletter/Rectangle 45.png" alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000">
                        <div className="Inc_Div_our-newsletter-subscribe" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000" >
                            <button
                                className="Inc_Div_care_to_join_button-subscribe">Subscribe</button>
                            <form action="#">
                                <div class="user-input-wrp" id="Inc_Div_care-email-foot">
                                    
                                    <input type="text" class="inputText" required />
                                    <span class="floating-label">Enter your Email</span>
                                </div>
                            </form>
                        </div>
                        <div className="Inc_Div_our-newsletter-text"
                            data-aos="fade-right" data-aos-duration="2000">
                            <ul className="Inc_Div_out-newsletter-head">Our newsletter is more than just information
                                Subscribe to see the difference</ul>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />

        </div>
    )
}
