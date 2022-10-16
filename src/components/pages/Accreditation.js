import React from 'react';
import '../../App.css';
import Footer from './Footer'
import './accreditation.css'

import a1 from "./images/a1.png";
import a2 from "./images/a2.png";
import a3 from "./images/a3.jpg";
import a4 from "./images/a4.png";
import a5 from "./images/a5.jpg";
import a6 from "./images/a6.jpg";
import a7 from "./images/a7.jpg";
import a8 from "./images/a8.jpg";
import a9 from "./images/a9.jpg";


export default function Accreditation() {
  return (
    <div className='accreditation'>
      <div className='acc-container'>
        <h1 className='animate fadeInDown' >Accreditation</h1>

        <div class="acc-parent">
        <div class="acc-div1 animate fadeIn"> <img src={a6} alt='a1' className='acc-img1 acc-imgh' /> </div>
        <div class="acc-div2 animate fadeIn"> <img src={a5} alt='a2' className='acc-img2 acc-imgh' /> </div>
        <div class="acc-div3 animate fadeIn"> <img src={a8} alt='a3' className='acc-img3 acc-imgh' /> </div>
        <div class="acc-div4 animate fadeIn"> <img src={a7} alt='a4' className='acc-img4 acc-imgh' /> </div>
        <div class="acc-div5 animate fadeIn"> <img src={a3} alt='a5' className='acc-img5 acc-imgh' /> </div>
        <div class="acc-div6 animate fadeIn"> <img src={a1} alt='a6' className='acc-img6 acc-imgh' /> </div>
        <div class="acc-div7 animate fadeIn"> <img src={a4} alt='a7' className='acc-img7 acc-imgh' /> </div>
        <div class="acc-div8 animate fadeIn"> <img src={a9} alt='a8' className='acc-img8 acc-imgh' /> </div>
        <div class="acc-div9 animate fadeIn"> <img src={a2} alt='a9' className='acc-img9 acc-imgh' /> </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
