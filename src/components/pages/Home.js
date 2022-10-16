import React from 'react';
import '../../App.css';
import Footer from './Footer'
import './Home.css'
// import Shield from './images/shield.gif'
// import Books from './images/books.gif'
// import Phone from './images/phone.gif'

import hero from "./images/hero.png"
import { Link } from 'react-router-dom';



export default function Home() {



  return (

    <div className="home-div">
      
      <div class="container" >
        <div class="row">
          <div class="col-lg-6 d-flex flex-column justify-content-center animate fadeInLeft">
            <h1 data-aos="fade-up">Secure your cyber zone with our services!</h1>
            <div data-aos="fade-up" data-aos-delay="600">
              <div class="text-center text-lg-start">
                
                <Link to="/services" className="get-btn btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center animate fadeInUp three">
                  <span>Get Started</span>
                  <i class="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-6 hero-img" data-aos="fade-right" data-aos-delay="200">
            <img src={hero} class="img-fluid hero-img" alt="" />
          </div>
        </div>
      </div>

      <Footer />

    </div>

  );
}
