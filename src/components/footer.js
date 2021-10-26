import React from 'react'
import '../css/footer.css';

function Footer() {
    return (
        <div>
            {/* ================ start footer Area ================= */}
      {/*Footer Start */}
      <section className="footer_section" style={{width: '180%'}}>
        <footer>
          <section>
            <div className="container-fluid-footer">
              <div className="col-12 col-lg-3">
                <img className="logo-footer" src="img/logo/logo-fnal-box-1-e1605580586370.png" alt="logo" />
                <div className="foot-c">
                  <nav className="menu">
                    <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
                    <label className="menu-open-button" style={{backgroundColor: '#f2f2f2', color: '#31647c'}} htmlFor="menu-open">
                      <i className="fas fa-share-alt" style={{marginTop: '-9.2px', marginLeft: '-13.5px', fontSize: 'large'}} />
                    </label>
                    <a href="https://www.instagram.com/corporalityg/" className="menu-item instagram"> <i className="fab fa-instagram" style={{marginTop: '-12px', marginLeft: '-12.5px'}} />
                    </a>
                    <a href="https://www.facebook.com/CorporalityG/" className="menu-item facebook"> <i className="fab fa-facebook-f" style={{marginTop: '-12px', marginLeft: '-13px'}} />
                    </a>
                    <a href="https://in.pinterest.com/CorporalityG/" className="menu-item pinterest"> <i className="fab fa-pinterest" style={{marginTop: '-12px', marginLeft: '-12.5px'}} />
                    </a>
                    <a href="https://twitter.com/corporalityg/" className="menu-item twitter"> <i className="fab fa-twitter" style={{marginTop: '-12px', marginLeft: '-12.5px'}} />
                    </a>
                    <a href="https://www.linkedin.com/company/corporality/" className="menu-item linkedin">
                      <i className="fab fa-linkedin-in" style={{marginTop: '-12px', marginLeft: '-12.5px'}} />
                    </a>
                    <a href="https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg/" className="menu-item youtube"> <i className="fab fa-youtube" style={{marginTop: '-12px', marginLeft: '-14.5px'}} /> </a>
                  </nav>
                </div>
                <div>
                  <form action="#">
                    <input type="text" id="email-foot" placeholder="Email ID" name="username" /><br />
                  </form>
                  <form>
                    <input type="checkbox" id="email-text" name="email" defaultValue="email-id" className="footer_cbox" />
                    <div className="footer_email_text">
                      I agree to have my personal data stored, processed and analysed by Corporality
                      as
                      outlined in this Privacy Policy.*
                    </div>
                  </form>
                  <button id="email-foot-btn">Subscribe</button>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <h className="heading-foot foot-1"><b style={{color: '#31647c'}}>Our Frame Work
                    <hr style={{borderTop: 'solid 3px', width: '60px', height: '0px', textAlign: 'left', marginLeft: 0, marginTop: '5px', marginBottom: '10px', color: '#a06cae'}} />
                  </b></h>
                <ul className="uls1" style={{listStyleType: 'none'}}>
                  <li>
                    <a className="footer-a" href="./allpages/OURFRAMEWORK/whatiscorporalityeffect.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      What is Corporality
                      effect?</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/OURFRAMEWORK/whycorporalityeffect.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Why
                      Corporaility
                      Effect?</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/OURFRAMEWORK/culturallyconditioned.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Culturally Conditioned</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/OURFRAMEWORK/corporalitystriker.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Corporality Striker</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/OURFRAMEWORK/inboundshifting.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Inbound Shifting</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/INSIGHTS/videolibrary.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Video Library</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-3">
                <h className="heading-foot foot-2"><b style={{color: '#31647c'}}>Our Service
                    <hr style={{borderTop: 'solid 3px', width: '60px', height: '0px', textAlign: 'left', marginLeft: 0, marginTop: '5px', marginBottom: '10px', color: '#a06cae'}} />
                  </b></h>
                <ul className="uls2" style={{listStyleType: 'none'}}>
                  {/* <li>
                            <a href="./allpages/OURSERVICES/strategicstrength.html"> Strategic Strength</a>
                        </li> */}
                  <li>
                    <a className="footer-a" href="./allpages/OURSERVICES/websiteblueprint.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Website Blueprint</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/OURSERVICES/digitalmediamarketing.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Digital Media Marketing</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/OURSERVICES/productstrategy.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Product Strategy</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/OURSERVICES/marketingstrategyfor2021.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Marketing Strategy for 2022</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/OURSERVICES/corporatestrategy.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Corporate Strategy</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/OURSERVICES/professionalpracticesstrategy.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Professional
                      Practices Strategy</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/OURSERVICES/ledgenandsalesstrategy.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Lead Gen and Sales
                      Strategy demo</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-3">
                <h className="heading-foot foot-3"><b style={{color: '#31647c'}}>About Us
                    <hr style={{borderTop: 'solid 3px', width: '60px', height: '0px', textAlign: 'left', marginLeft: 0, marginTop: '5px', marginBottom: '10px', color: '#a06cae'}} />
                  </b></h>
                <a className="footer-top-arrow" onclick="window.scrollTo(0, 0)" style={{scrollBehavior: 'smooth'}}><button className="footer-topup"><i className="fas fa-arrow-up fa-1x" /></button></a>
                <ul className="uls3" style={{listStyleType: 'none'}}>
                  <li className="footer_aboutus">
                    <a className="footer-a" href="./allpages/ABOUTCORPORALITY/corporalitycitizenship.html"><img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Corporality
                      Citizenship</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/ABOUTCORPORALITY/ourteam.html"> <img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Our Team</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/ABOUTCORPORALITY/careers.html"> <img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Careers</a>
                  </li>
                  <li>
                    <a className="footer-a" href="./allpages/INSIGHTS/blog.html"> <img src="./img/logo/Polygon 12.png" style={{marginLeft: '-4px', paddingRight: '5px'}} />
                      Insight</a>
                  </li>
                </ul>
                {/* <div class="col-4 pp text-muted">
                           
                            <a href="./allpages/privacypolicy.html" class="footer_button_pp"
                                style="text-decoration: none;">
                                <button class="bts-foot1">
                                    <pre
                                        style="font-size: small; font-family:Arial, Helvetica, sans-serif; background-color:#f6f9fc;  color: #a06db0;"><b>Privacy Policy</b></pre>
                                </button>
                            </a>
                        </div>
                        <div class="col-4 tc text-muted">
                            <a href="./allpages/termsandconditions.html" class="footer_button_tc"
                                style="text-decoration: none;">
                                <button class="bts-foot2">
                                    <pre
                                        style="font-size: small; font-family:Arial, Helvetica, sans-serif; background-color:#f6f9fc;  color: #a06db0;"><b>Terms and Conditions</b></pre>
                                </button>
                            </a>
                        </div>
                        <div class="col-4 sm text-muted">
                            <a href="./allpages/sitemap.html" class="footer_button_pp" style="text-decoration: none;">
                                <button class="bts-foot3">
                                    <pre
                                        style="font-size: small; font-family:Arial, Helvetica, sans-serif; background-color:#f6f9fc;  color: #a06db0;"><b>Sitemap</b></pre>
                                </button>
                            </a>
                        </div> */}
                {/* <a class="footer-top-arrow" onClick="window.scrollTo(0, 0)" style="scroll-behavior: smooth;"><i class="fas fa-arrow-circle-up"></i></a> */}
                {/* <a class="footer-top-arrow" onClick="window.scrollTo(0, 0)" style="scroll-behavior: smooth;"><button class="footer-topup"><i class="fas fa-arrow-up"></i></button></a> */}
              </div>
              <hr className="footer_hr" />
              <div className="row footer-terms">
                <div className="col-4">
                  <button className="footer-terms1-btn" style={{paddingTop: '2.4px'}}>
                    <a href="#">
                      <p className="footer-terms1"> Privacy Policy</p>
                    </a>
                  </button>
                </div>
                <div className="col-4">
                  <button className="footer-terms2-btn" />
                  <a href="#">
                    <p className="footer-terms2">Terms and Conditions</p>
                  </a>
                </div>
                <div className="col-4">
                  <button className="footer-terms3-btn">
                    <a href="#">
                      <p className="footer-terms3">Sitemap</p>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col-12 text-muted text-center">
                <a href="#">
                  <p className="copyright">Copyright ©️ 2021 Corporality</p>
                </a>
              </div>
            </div>
          </section>
        </footer>
      </section>
      {/*Footer End */}
      {/* ================ End footer Area ================= */}
    </div>
    );
}

export default Footer;