import React from 'react';
import '../../App.css';
import Footer from './Footer'
import './news.css'

import n1 from './images/n1.jpg'
import n2 from './images/n2.jpg'
import n3 from './images/n3.jpg'
import n4 from './images/n4.jpg'
import n5 from './images/n5.jpg'
import n6 from './images/n6.jpg'

export default function ContactUs() {
  return (
    <div className='news'>
      <div className='news-div'>
        <h1 className='animate fadeInDown' >News</h1>

        <div class="news-parent">
          <div class="news-div1 animate fadeInLeft"> <img src={n1} alt='n1' className='news-img1 news-imgh' /> </div>
          <div class="news-div2 animate fadeInRight"> <img src={n2} alt='n2' className='news-img2 news-imgh' /> </div>
          <div class="news-div3 animate fadeInLeft two"> <img src={n3} alt='n3' className='news-img3 news-imgh' /> </div>
          <div class="news-div4 animate fadeInRight two"> <img src={n4} alt='n4' className='news-img4 news-imgh' /> </div>
          <div class="news-div5 animate fadeInLeft four"> <img src={n5} alt='n5' className='news-img5 news-imgh' /> </div>
          <div class="news-div6 animate fadeInRight four"> <img src={n6} alt='n6' className='news-img6 news-imgh' /> </div>
        </div>
      </div>

      <Footer />
    </div>
  
  )
}
