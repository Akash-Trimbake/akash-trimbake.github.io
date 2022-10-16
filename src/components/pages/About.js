import React from 'react';
import '../../App.css';
import Footer from './Footer'
import './about.css'

import construction from './images/construction.gif'
import bank from './images/bank.gif'
import fmcg from './images/fmcg.gif'
import technology from './images/technology.gif'
import iso from './images/iso-certified.png'
import onkarPic from './images/onkar-pic.jpg'
import mission from './images/mission.jpg'

export default function About() {
  return (
    <div className='about'>
      <div className='about-div'>
        <h1 className='animate fadeInDown' >About Us</h1>
        <div className='about-container'>
          <h2 className='about-h2 animate fadeInDown two'>AlanceSec helps businesses from various different sectors </h2>
          <h2 className='about-h2 animate fadeInDown three'>in securing their systems.</h2>

          <div class="row">

            <div class="col-lg-3">
              <div className='micro-container animate fadeInLeft one'>
                <img src={bank} alt='bank icon' className='about-gif ' />
                <h3>Banking Sector</h3>
              </div>
            </div>
            <div class="col-lg-3">
              <div className='micro-container animate fadeInLeft three'>
                <img src={technology} alt='technology icon' className='about-gif ' />
                <h3>Technology Sector</h3>
              </div>
            </div>
            <div class="col-lg-3">
              <div className='micro-container animate fadeInLeft five'>
                <img src={construction} alt='construction icon' className='about-gif ' />
                <h3>Construction Sector</h3>
              </div>
            </div>
            <div class="col-lg-3">
              <div className='micro-container animate fadeInLeft seven'>
                <img src={fmcg} alt='fmcg icon' className='about-gif ' />
                <h3>FMCG Sector</h3>
              </div>
            </div>

          </div>

        </div>


        <hr className='about-hr' />

        <div className='about-info'>

        <div class="row" >
          <div class="col-lg-6 animate fadeInLeft">
            <div className='about-info-img'>
              <img src={iso} alt='iso-certified' className='info-img ' />
            </div>
          </div>
          <div class="col-lg-6 animate fadeInRight">
            <div>
              <h2 className='info-h2'>ISO Certified</h2>
              <p className='info-para'>Alancesec is an ISO certified organization ensuring credibility to its clients.</p>
            </div> 
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 animate fadeInLeft two">
            <div>
              <h2 className='info-h2'>Our Mission</h2>
              <p className='info-para'>We aim to serve premium cyber security services at best prices.We have served more than 150 MNCs and helped them secured their businesses from the outside issues.</p>
            </div>
          </div>
          <div class="col-lg-6 animate fadeInRight two">
            <div className='about-info-img'>
              <img src={mission} alt='mission' className='info-img' />  
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 animate fadeInLeft four">
            <div className='about-info-img about-info-img3'>
              <img src={onkarPic} alt='Pic of Founder and CEO' className='info-img onkar-pic' />
            </div>
          </div>
          <div class="col-lg-6 animate fadeInRight four">
            <div>
              <h2 className='info-h2'>Our Founder and CEO</h2>
              <p className='info-para'>Onkar Sonawane (born on March 31, 2002) of Pune, Maharashtra, is appreciated for being listed in secured 100+website, Truecaller, Google, Netherland Government,Snapchat and Mozilla Firefox Halls of Fame as a young ethical hacker at the age of 17 years.</p>
            </div>
          </div>
        </div>

        </div>


      </div>
      <Footer />
    </div>
  )
}
