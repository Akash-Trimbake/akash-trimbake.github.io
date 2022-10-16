import React from 'react';
import '../../App.css';
import './services.css'
import Footer from './Footer'
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import NVAPT from './images/NVAPT.png'
import MAVAPT from './images/MAVAPT.png'
import RTVAPT from './images/RTVAPT.png'
import WAVAPT from './images/WAVAPT.png'

export default function Services() {
  return (
    <div className='services'>
      <div className='services-div'>
        <h1 className='animate fadeInDown'>Services</h1>

        <div class="service-parent">




          <div class="row" >

            <div class="col-lg-6 animate fadeInLeft" data-aos="fade-up" data-aos-delay="200">
              <div class="box box1" > 
                <img src={WAVAPT} class="img-fluid services-img-fluid services-img-fluid1" alt="" />
                <h3>Web Application VAPT</h3>
                <p>AlanceSec can help you to keep your business safe & secured online.</p>
              </div>
            </div>

            <div class="col-lg-6 mt-4 mt-lg-0 animate fadeInRight two" data-aos="fade-up" data-aos-delay="600">
              <div class="box box2">
                <img src={MAVAPT} class="img-fluid services-img-fluid services-img-fluid2" alt="" />
                <h3>Mobile Application VAPT</h3>
                <p>Make sure your app is secured and have no cyber security issues.</p>
              </div>
            </div>
          </div>
          <div class="row" >
            <div class="col-lg-6 mt-4 mt-lg-0 animate fadeInLeft three" data-aos="fade-up" data-aos-delay="400">
              <div class="box box3">
              <img src={NVAPT} class="img-fluid services-img-fluid services-img-fluid3" alt="" />
              <h3>Network VAPT</h3>
              <p>Identify possible vulnerabilities that attackers may exploit.</p>
              </div>
            </div>

            <div class="col-lg-6 mt-4 mt-lg-0 animate fadeInRight four" data-aos="fade-up" data-aos-delay="800">
              <div class="box box4">
                <img src={RTVAPT} class="img-fluid services-img-fluid services-img-fluid4" alt="" />
                <h3>Red Teaming</h3>
                <p>Test your organization against the top threats facing your business.</p>
              </div>
            </div>



          </div>


        </div>
      </div>
      
	

      <Footer />
    </div>
  );
}
