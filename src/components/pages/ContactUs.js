import React from 'react';
import '../../App.css';
import './contact.css';
import instagram from './images/instagram.png'
import facebook from './images/facebook.png'
import linkedin from './images/linkedin.png'
import youtube from './images/youtube.png'
import Footer from './Footer'
import Map from './images/map.gif'
import Phone from './images/phone.gif'
import Email from './images/email.gif'
import Clock from './images/clock.gif'

export default function ContactUs() {
  return (
    <div className='contact-us' >

      <h1 style={{textAlign:'center'}} className='animate fadeInDown'>Contact Us</h1>

      <div class="row gy-4" style={{padding:"50px"}}>

        <div class="col-lg-6">

            <div class="row gy-4 contact-left">

              <div class="col-md-6 animate fadeInLeft one">
                <div class="info-box">
                  <img className='gif' src={Phone} alt='.' />
                  <h3>Call Us</h3>
                  <p>+91 - 9322670616</p>
                </div>
              </div>
              <div class="col-md-6 animate fadeInLeft three">
                <div class="info-box" >
                  <img className='gif' src={Email} alt='.' />
                  <h3>Email Us</h3>
                  <p>contact@alancesec.com</p>
                </div>
              </div>
              <div class="col-md-6 animate fadeInLeft five">
                <div class="info-box">
                  <img className='gif' src={Map} alt='.' />
                  <h3>Address</h3>
                  <p>15, Shivmangal, 1535,<br />Tilak Road, Sadashiv Peth,<br /> Pune 411030 <br /> Maharashtra India</p>
                </div>
              </div>
              <div class="col-md-6 animate fadeInLeft seven">
                <div class="info-box">
                  <img className='gif' src={Clock} alt='.' />
                  <h3>Open Hours</h3>
                  <p>Monday - Friday<br />9:00AM - 05:00PM</p><br /><br />
                </div>
              </div>
            </div>

        </div>
{/* ................................................................... */}
        <div class="col-lg-5 animate fadeInRight one" >
          <div class="row gy-4" className='contact-right'>

            <div class="col-md-12">
              <h3>
              Any questions? Don't hesitate to drop us an email, we'd love to hear from you.
              </h3>
            </div>

            {/* <div class="col-md-12">
              <h4>Feel free to contact us for any questions and doubts</h4>
            </div> */}

            <div class="col-md-12">
              <a href='https://www.facebook.com/alancesec'>
              <img src={facebook} alt="Logo" className='contact-logo' />
              </a>
              <a href='https://instagram.com/alancesec?igshid=YmMyMTA2M2Y='>
              <img src={instagram} alt="Logo" className='contact-logo' />
              </a>
                  
              <a href='https://in.linkedin.com/company/alancesec'>
              <img src={linkedin} alt="Logo" className='contact-logo' />
              </a>
              <a href='https://youtu.be/uOObmSsW6A4'>
              <img src={youtube} alt="Logo" className='contact-logo' />
              </a>
            </div>

            <div class="col-md-12">
              <button class="cta">
                <span><a class="button-text" href='https://goo.gl/maps/n53uWNvTGLNXr9Po8'> Get Directions</a></span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </div>

          </div>

        </div>

      </div>


      <Footer />
    </div>
    
  )
}
