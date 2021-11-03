import React from 'react'
import localcls from './banner.module.css';
import Group613 from './img/Group 613.png';
import Group614 from './img/Group 614.png';
import Group615 from './img/Group 615.png';
import Group616 from './img/Group 616.png';
import Group617 from './img/Group 617.png';
import Group618 from './img/Group 618.png';
import Group709 from './img/Group 709.png';
import Strategy from './img/Strategy.png';
import Group from './img/_Group_.png';
import Group_3 from './img/_Group_ (3).png';
import Group_6 from './img/_Group_ (4).png';
import Group_5 from './img/_Group_ (5).png';
import Group_1 from './img/_Group_ (1).png';
import Group_4 from './img/oie_transparent.png';
import Group_2 from './img/_Group_ (2).png';
import Group_7 from './img/_Group_ (6).png';
import Vector11 from './img/Vector 11.png';
export default function Banner() {
    return (
        <div>
            <div className={localcls.banner_bkg_wrapper}>
                <div className={localcls.social_media_box}>
                    <a href="#"> <img src={Group618}></img> </a>
                    <a href="#"> <img src={Group617}></img> </a>
                    <a href="#"> <img src={Group616}></img> </a>
                    <a href="#"> <img src={Group615}></img> </a>
                    <a href="#"> <img src={Group614}></img> </a>
                    <a href="#"> <img src={Group613}></img> </a>
                </div>
                <div className={localcls.banner_bkg}>
                    <div className={localcls.strategy}>
                        <img src={Strategy}></img>
                    </div>
                </div>
            </div>
            <div className={localcls.banner_front} >
                <div className={localcls.main_container}>
                    <div className={localcls.banner_front_inner}>
                        <div className={localcls.corporate_banner_left}>
                            <h1 style={{zIndex:'100'}}>Corporate Strategy</h1>
                            <p>Resolutions to all your corporate strategy issues Multiple problems, one solution</p>
                        </div>
                        <div className={localcls.corporate_banner_right} >



                            <div className={localcls.banner_right_upper}>

                                <div style={{width:'100%'}}>
                                    <img src={Group_3} className={localcls.banner_right_upper_img1} />
                                    <img src={Group_1} className={localcls.banner_right_upper_img2} />
                                    <img src={Group_2} className={localcls.banner_right_upper_img3} />
                                    <img src={Group_4} className={localcls.banner_right_upper_img4} />
                                    <img src={Group_6} className={localcls.banner_right_upper_img6} />
                                    <img src={Group_5} className={localcls.banner_right_upper_img5} />
                                </div>
                                <div>
                                <img src={Group_7} className={localcls.banner_globe} />
                                </div>


                            </div>
                            <div className={localcls.banner_right_bottom}>
                                <img src={Vector11} className={localcls.banner_right_bottom_img3} />
                                <img src={Group} className={localcls.banner_right_bottom_img1}></img>
                                <img src={Group709} className={localcls.banner_right_bottom_img2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
