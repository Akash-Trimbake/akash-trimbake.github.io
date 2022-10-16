import React from 'react';
import './footer.css'
import instagramb from './images/instagramb.png'
import facebookb from './images/facebookb.png'
import linkedinb from './images/linkedinb.png'
import youtubeb from './images/youtubeb.png'

export default function ContactUs() {

  const date = new Date().getFullYear();


  return (
    <div className='footer animate fadeInUp'>
      <div className='footer-logo-group'>
        <a href='https://www.facebook.com/alancesec'>
        <img src={facebookb} alt="Logo" className='footer-logo' />
        </a>
        <a href='https://instagram.com/alancesec?igshid=YmMyMTA2M2Y='>
        <img src={instagramb} alt="Logo" className='footer-logo' />
        </a>
        <a href='https://in.linkedin.com/company/alancesec'>
        <img src={linkedinb} alt="Logo" className='footer-logo' />
        </a>
        <a href='https://youtu.be/uOObmSsW6A4'>
        <img src={youtubeb} alt="Logo" className='footer-logo' />
        </a>
      </div>

      <p className='footer-para' >Copyright ©  {date} All Rights Reserved.</p>

      
    </div>
  )
}
