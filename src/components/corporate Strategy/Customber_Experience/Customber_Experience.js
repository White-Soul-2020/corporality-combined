import React from 'react'
import localclass from './Customber_Experience.module.css';
import vector from './img/Vector.png';
import Rectangle_260 from './img/Rectangle 260.png';
export default function Customber_Experience() {
    return (
        <div >
            <div className={localclass.paralax_rect}>
              
            </div>
            <div className={localclass.main_container}>
            <div className={localclass.exp_text_1} >
                <h1>Customer Experience (CX) Strategy</h1>
                <p>While frustrating and friction-filled customer experience still exists, no company sets out to deliver a poor customer experience. Over the past decade, many companies have undertaken customer experience initiatives and they regularly measure and monitor customer satisfaction scores, Net Promoter scores, and customer feedback. However, market leaders go a step further: they can directly connect customer experience – and the moments within a customer’s journey – to revenue growth. In short, market leaders have figured out how to monetize CX.</p>
                
                <div className={localclass.exp_button}>
                  <div className={localclass.exp_button_img} >
                     <img src={Rectangle_260} className={localclass.exp_button_img1}></img>
                     <img src={vector} className={localclass.exp_button_img2}></img>
                  </div>
                  <a href="#">Explore</a>
                </div>
            </div>
            </div>
        </div>
    )
}
