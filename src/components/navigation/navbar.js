import React from 'react'
import './nav.css';

import { useEffect} from 'react';
import { nav_res } from './nav_res';
import { nav } from './nav';

function Navbar() {

  useEffect(() =>{
    // nav();
    nav_res();
  }, [])
    return (
        <div>
            {/* Nav Bar Start */}
      <section className="navigation">
        <nav className="navbar navbar-expand-md navbar-dark bg-white fixed-top" id="myHeader">
          <div className="main-container">
            {/*main container div*/}
            <div className="navbar">
              <i className="bx bx-menu" />
              <div className="nav_logo"><img src="./img/logo/logo-fnal-box-1-e1605580586370.png" style={{width: '250px', marginTop: '-2.5px', marginLeft: '49%'}} className="nav-logo-img" /></div>
              <div className="nav-links">
                <div className="sidebar-logo">
                  <span className="logo-name" />
                  <i className="bx bx-x" style={{color: '#31647c'}} />
                  <div className="nav_cp">
                    <ul id="accordion" className="accordion">
                      <div className="contacts">
                        <li className="accordion-li">
                          <div className="link">ABOUT<i className="fa fa-chevron-down" id="arrow_m" /></div>
                          <ul className="submenu">
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Partnership And
                                Programs</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>About
                                Corporality</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>How We Work With
                                Clients</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Sustainable
                                Growth</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Strategy And
                                Consulting</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Interactive
                                Blueprint</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Inclusion And
                                Diversity</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                          </ul>
                        </li>
                        <li className="accordion-li">
                          <div className="link">SERVICES<i className="fa fa-chevron-down" id="arrow_m" />
                          </div>
                          <ul className="submenu">
                            <li id="about-point1"><a href="./allpages/OURSERVICES/gotomarketing.html" style={{color: 'black'}}>Brand Positioning</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="./allpages/OURSERVICES/digitalmediamarketing.html" style={{color: 'black'}}>Digital Media Marketing</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="./allpages/OURSERVICES/marketingstrategyfor2021.html" style={{color: 'black'}}>Interactivity Blueprint</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="./allpages/OURSERVICES/professionalpracticesstrategy.html" style={{color: 'black'}}> Strategic Consultancy</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="./allpages/OURSERVICES/corporatestrategy.html" style={{color: 'black'}}>Corporate Strategy</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="./allpages/OURSERVICES/productstrategy.html" style={{color: 'black'}}>Go to Marketing Strategy</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="./allpages/OURSERVICES/websiteblueprint.html" style={{color: 'black'}}>Outsourced Cxo</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            {/* <li id="about-point1"><a href="./allpages/OURSERVICES/ledgenandsalesstrategy.html" style={{color: 'black'}}>Lead Gen and Sales Strategy</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li> */}
                            {/* <li id="about-point1"><a href="#" style={{color: 'black'}}>Brand
                                Strategy</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li> */}
                          </ul>
                        </li>
                        <li className="accordion-li">
                          <div className="link">INSIGHTS<i className="fa fa-chevron-down" id="arrow_m" />
                          </div>
                          <ul className="submenu">
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Medtech</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Fintech – Credit
                                Union</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Geospatial</a>
                              <img src={"./img/nav/diamond_arrow.png"} id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}> Biotech / Bio
                                chemical /Chemical Engineering</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Nanotech</a>
                              <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Age Care and
                                Retirement</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Cruise and
                                Tourism</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Industrial
                                Equipment</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Metal
                                Industry</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Construction</a>
                              <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Manufacturing</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>High Tech</a>
                              <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Information
                                Technology</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Agriculture</a>
                              <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Health care</a>
                              <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Utilities and
                                Energy – Solar energy / Renewable</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                          </ul>
                        </li>
                        <li className="accordion-li">
                          <div className="link">INDUSTRIES<i className="fa fa-chevron-down" id="arrow_m" />
                          </div>
                          <ul className="submenu">
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Partnership And
                                Programs</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>About
                                Corporality</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>How We Work With
                                Clients</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Sustainable
                                Growth</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Strategy And
                                Consulting</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Interactive
                                Blueprint</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Inclusion And
                                Diversity</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                          </ul>
                        </li>
                        <li className="accordion-li">
                          <div className="link">CAREERS<i className="fa fa-chevron-down" id="arrow_m" />
                          </div>
                          <ul className="submenu">
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Partnership And
                                Programs</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>About
                                Corporality</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>How We Work With
                                Clients</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Sustainable
                                Growth</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Strategy And
                                Consulting</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Interactive
                                Blueprint</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                            <li id="about-point1"><a href="#" style={{color: 'black'}}>Inclusion And
                                Diversity</a> <img src="./img/nav/diamond_arrow.png" id="about-point1-img" /></li>
                          </ul>
                        </li>
                        <li className="accordion-li">
                          <div className="number-link"><a href="./allpages/contact.html">CONTACT</a></div>
                        </li>
                        <li className="number_li">
                          <div className="number-link">
                            <a href="#" className="contactno_a"><button className="nav-li-number">+61 2
                                89099009</button></a></div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                <nav className="hidden-mobile">
                  <ul className="nav_ul">
                    {/* about */}
                    <li className="about_li"><a href="#" className="nav-a">ABOUT</a>
                      {/* <img src="../img/nav/nav_ptr.PNG" class="about_ptr"> */}
                      <div className="about-sub" id="abt-sub">
                        <img src="../img/nav/left1.png" className="about-left-1" />
                        <ul className="about-column-1">
                          <li className="about_point1_li"><a href="#" className="about-point1">Partnership And
                              Programs</a>
                            <img src="./img/nav/diamond_arrow.png" className="about-point1-img" />
                          </li>
                          <li className="about_point2_li"><a href="#" className="about-point2">About
                              Corporality</a>
                            <img src="./img/nav/diamond_arrow.png" className="about-point2-img" />
                          </li>
                          <li className="about_point3_li"><a href="#" className="about-point3">How We Work
                              With Clients</a>
                            <img src="./img/nav/diamond_arrow.png" className="about-point3-img" />
                          </li>
                        </ul>
                        <ul className="about-column-2">
                          <li className="about_point4_li"><a href="#" className="about-point4">Sustainable
                              Growth</a>
                            <img src="./img/nav/diamond_arrow.png" className="about-point4-img" />
                          </li>
                          <li className="about_point5_li"><a href="#" className="about-point5">Strategy And
                              Consulting</a>
                            <img src="./img/nav/diamond_arrow.png" className="about-point5-img" />
                          </li>
                          <li className="about_point6_li"><a href="#" className="about-point6">Interactive
                              Blueprint</a>
                            <img src="./img/nav/diamond_arrow.png" className="about-point6-img" />
                          </li>
                        </ul>
                        <ul className="about-column-3">
                          <li className="about_point7_li"><a href="#" className="about-point7">Inclusion and
                              Diversity</a>
                            <img src="./img/nav/diamond_arrow.png" className="about-point7-img" />
                          </li>
                        </ul>
                        <img src="../img/nav/right1.png" className="about-right-1" />
                      </div>
                    </li>
                    {/* services */}
                    <li className="services_li"><a href="#" className="nav-a">SERVICES</a>
                      <div className="services-sub">
                        <img src="../img/nav/left1.png" className="services-left-1" />
                        <ul className="services-column-1">
                          <li className="services_point1_li"><a href="./allpages/OURSERVICES/gotomarketing.html" className="services-point1">Go-to-Marketing</a>
                            <img src="./img/nav/diamond_arrow.png" className="services-point1-img" />
                          </li>
                          <li className="services_point2_li"><a href="./allpages/OURSERVICES/digitalmediamarketing.html" className="services-point2">Digital Media Marketing</a>
                            <img src="./img/nav/diamond_arrow.png" className="services-point2-img" />
                          </li>
                          <li className="services_point3_li"><a href="./allpages/OURSERVICES/marketingstrategyfor2021.html" className="services-point3">Marketing Strategy</a>
                            <img src="./img/nav/diamond_arrow.png" className="services-point3-img" />
                          </li>
                        </ul>
                        <ul className="services-column-2">
                          <li className="services_point4_li"><a href="./allpages/OURSERVICES/professionalpracticesstrategy.html" className="services-point4">Professional Practice Strategy</a>
                            <img src="./img/nav/diamond_arrow.png" className="services-point4-img" />
                          </li>
                          <li className="services_point5_li"><a href="./allpages/OURSERVICES/corporatestrategy.html" className="services-point5">Corporate Strategy</a>
                            <img src="./img/nav/diamond_arrow.png" className="services-point5-img" />
                          </li>
                          <li className="services_point6_li"><a href="./allpages/OURSERVICES/productstrategy.html" className="services-point6">Product Strategy</a>
                            <img src="./img/nav/diamond_arrow.png" className="services-point6-img" />
                          </li>
                        </ul>
                        <ul className="services-column-3">
                          <li className="services_point7_li"><a href="./allpages/OURSERVICES/websiteblueprint.html" className="services-point7">Website Blueprint</a>
                            <img src="./img/nav/diamond_arrow.png" className="services-point7-img" />
                          </li>
                          <li className="services_point8_li"><a href="./allpages/OURSERVICES/ledgenandsalesstrategy.html" className="services-point8">Lead Gen and Sales Strategy</a>
                            <img src="./img/nav/diamond_arrow.png" className="services-point8-img" />
                          </li>
                          <li className="services_point9_li"><a href="#" className="services-point9">Brand
                              Strategy</a>
                            <img src="./img/nav/diamond_arrow.png" className="services-point9-img" />
                          </li>
                        </ul>
                        <img src="../img/nav/right1.png" className="services-right-1" />
                      </div>
                    </li>
                    {/* insights */}
                    <li className="insights_li"><a href="#" className="nav-a">INSIGHTS</a>
                      <div className="insights-sub">
                        <img src="../img/nav/left1.png" className="insights-left-1" />
                        <ul className="insights-column-1">
                          <li className="insights_point1_li"><a href="#" className="insights-point1">Medtech</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point1-img" />
                          </li>
                          <li className="insights_point2_li"><a href="#" className="insights-point2">Fintech –
                              Credit Union</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point2-img" />
                          </li>
                          <li className="insights_point3_li"><a href="#" className="insights-point3">Geospatial</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point3-img" />
                          </li>
                          <li className="insights_point4_li"><a href="#" className="insights-point4">Biotech /
                              Bio chemical /<br />Chemical Engineering</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point4-img" />
                          </li>
                        </ul>
                        <ul className="insights-column-2" style={{marginTop: '4.1%'}}>
                          <li className="insights_point5_li"><a href="#" className="insights-point5">Nanotech</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point5-img" />
                          </li>
                          <li className="insights_point6_li"><a href="#" className="insights-point6">Age Care
                              and Retirement</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point6-img" />
                          </li>
                          <li className="insights_point7_li"><a href="#" className="insights-point7">Cruise
                              and Tourism</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point7-img" />
                          </li>
                          <li className="insights_point8_li"><a href="#" className="insights-point8">Industrial Equipment</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point8-img" />
                          </li>
                        </ul>
                        <ul className="insights-column-3" style={{marginTop: '-18.7%'}}>
                          <li className="insights_point9_li"><a href="#" className="insights-point9">Metal
                              Industry</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point9-img" />
                          </li>
                          <li className="insights_point10_li"><a href="#" className="insights-point10">Construction</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point10-img" />
                          </li>
                          <li className="insights_point11_li"><a href="#" className="insights-point11">Manufacturing</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point11-img" />
                          </li>
                          <li className="insights_point12_li"><a href="#" className="insights-point12">Information Technology</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point12-img" />
                          </li>
                        </ul>
                        <ul className="insights-column-4" style={{marginTop: '-21.3%', marginLeft: '55%'}}>
                          <li className="insights_point13_li"><a href="#" className="insights-point13">High
                              Tech</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point13-img" />
                          </li>
                          <li className="insights_point14_li"><a href="#" className="insights-point14">Agriculture</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point14-img" />
                          </li>
                          <li className="insights_point15_li"><a href="#" className="insights-point15">Health
                              care</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point15-img" />
                          </li>
                          <li className="insights_point16_li"><a href="#" className="insights-point16">Utilities and Energy – Solar<br />energy /
                              Renewable</a>
                            <img src="./img/nav/diamond_arrow.png" className="insights-point16-img" style={{marginTop: '-6%'}} />
                          </li>
                        </ul>
                        <img src="../img/nav/right1.png" className="insights-right-1" />
                      </div>
                    </li>
                    {/* industries */}
                    {/* <li class="industries_li"><a href="#" class="nav-a">INDUSTRIES </a>
           
            <div class="industries-sub">
            
                <img src="../img/nav/left1.png" class="industries-left-1">
                <ul class="industries-column-1">
        <li class="industries_point1_li"><a href="#" class="industries-point1">Partnership And Programs</a>
        <img src="./img/nav/diamond_arrow.png" class="industries-point1-img">
        </li>
        <li class="industries_point2_li"><a href="#" class="industries-point2">About Corporality</a>
            <img src="./img/nav/diamond_arrow.png" class="industries-point2-img">
            </li>
            <li class="industries_point3_li"><a href="#" class="industries-point3">How We Work With Clients</a>
                <img src="./img/nav/diamond_arrow.png" class="industries-point3-img">
                </li>
                </ul>

                <ul class="industries-column-2">
                    <li class="industries_point4_li"><a href="#" class="industries-point4">Sustainable Growth</a>
                    <img src="./img/nav/diamond_arrow.png" class="industries-point4-img">
                    </li>
                    <li class="industries_point5_li"><a href="#" class="industries-point5">Strategy And Consulting</a>
                        <img src="./img/nav/diamond_arrow.png" class="industries-point5-img">
                        </li>
                        <li class="industries"><a href="#" class="industries-point6">Interactive Blueprint</a>
                            <img src="./img/nav/diamond_arrow.png" class="industries-point6-img">
                        </li>
                            </ul>
                <ul class="about-column-3">
                    <li class="industries_point7_li"><a href="#" class="industries-point7">Inclusion and Diversity</a>
                        <img src="./img/nav/diamond_arrow.png" class="industries-point7-img">
                    </li>
                </ul>
                <img src="../img/nav/right1.png" class="industries-right-1">
            </div>      
  </li> */}
                    <li className="indus_li"><a href="#" className="nav-a">INDUSTRIES</a>
                      {/* <img src="../img/nav/nav_ptr.PNG" class="about_ptr"> */}
                      <div className="indus-sub">
                        <img src="../img/nav/left1.png" className="indus-left-1" />
                        <ul className="indus-column-1">
                          <li className="indus_point1_li"><a href="#" className="indus-point1" id="indus-li-1">Partnership And Programs</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point1-img" />
                          </li>
                          <li className="indus_point2_li"><a href="#" className="indus-point2" id="indus-li-2">About Corporality</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point2-img" />
                          </li>
                          <li className="indus_point3_li"><a href="#" className="indus-point3" id="indus-li-3">How We Work With Clients</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point3-img" />
                          </li>
                        </ul>
                        <ul className="indus-column-2">
                          <li className="indus_point4_li"><a href="#" className="indus-point4" id="indus-li-4">Sustainable Growth</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point4-img" />
                          </li>
                          <li className="indus_point5_li"><a href="#" className="indus-point5" id="indus-li-5">Strategy And Consulting</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point5-img" />
                          </li>
                          <li className="indus_point6_li"><a href="#" className="indus-point6" id="indus-li-6">Interactive Blueprint</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point6-img" />
                          </li>
                        </ul>
                        <ul className="indus-column-3">
                          <li className="indus_point7_li"><a href="#" className="indus-point7" id="indus-li-7">Inclusion and Diversity</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point7-img" />
                          </li>
                        </ul>
                        <img src="../img/nav/right1.png" className="indus-right-1" />
                      </div>
                    </li>
                    {/* careers */}
                    <li className="car_li"><a href="#" className="nav-a">CAREERS</a>
                      {/* <img src="../img/nav/nav_ptr.PNG" class="about_ptr"> */}
                      <div className="car-sub">
                        <img src="../img/nav/left1.png" className="indus-left-1" />
                        <ul className="indus-column-1">
                          <li className="indus_point1_li"><a href="#" className="indus-point1" id="indus-li-1">Partnership And Programs</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point1-img" />
                          </li>
                          <li className="indus_point2_li"><a href="#" className="indus-point2" id="indus-li-2">About Corporality</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point2-img" />
                          </li>
                          <li className="indus_point3_li"><a href="#" className="indus-point3" id="indus-li-3">How We Work With Clients</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point3-img" />
                          </li>
                        </ul>
                        <ul className="indus-column-2">
                          <li className="indus_point4_li"><a href="#" className="indus-point4" id="indus-li-4">Sustainable Growth</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point4-img" />
                          </li>
                          <li className="indus_point5_li"><a href="#" className="indus-point5" id="indus-li-5">Strategy And Consulting</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point5-img" />
                          </li>
                          <li className="indus_point6_li"><a href="#" className="indus-point6" id="indus-li-6">Interactive Blueprint</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point6-img" />
                          </li>
                        </ul>
                        <ul className="indus-column-3">
                          <li className="indus_point7_li"><a href="#" className="indus-point7" id="indus-li-7">Inclusion and Diversity</a>
                            <img src="./img/nav/diamond_arrow.png" className="indus-point7-img" />
                          </li>
                        </ul>
                        <img src="../img/nav/right1.png" className="indus-right-1" />
                      </div>
                    </li>
                    <li className="contact_li"><a href="./allpages/contact.html" className="nav-a">CONTACT</a></li>
                    <li className="number_li"><a href="#" className="contactno_a"><button className="nav-li-number">+61
                          2 89099009</button></a></li>
                  </ul>
                  {/* <img src="../img/nav/npi_final.jpg" class="industries_pointer"> */}
                </nav>
              </div>
            </div>
          </div>
          {/*container div*/}
        </nav>
        
      </section>
      {/* Nav Bar End */}
    </div>  
    );
}

export default Navbar;