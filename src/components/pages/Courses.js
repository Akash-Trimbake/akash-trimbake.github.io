import React from 'react';
import Footer from './Footer'
import '../../App.css';
import './courses.css'
import Presentation from './images/presentation.png'
import Rating from './images/rating.png'
import Save from './images/save.png'
import Statistics from './images/statistics.png'

import Course1 from './images/course1.jpg'
import Course2 from './images/course2.png'
import Clock from './images/clock.png'
import Check from './images/check-mark.png'
import Content1 from './Content'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Courses() {


  return (
    <div className='courses'>
      <div className='course-container'>
        <h1 className='animate fadeInDown'>Courses</h1>


        
        <div className='course-cards'>

          <div class="row">

            

            <div class="col-lg-6 course-card1 animate fadeInUp three">


              <Card className='course-card'>
                <Card.Img variant="top" className='course-img' src={Course1} />
                <Card.Body>
                  <Card.Title>Certification of Ethical Hacking</Card.Title>
                  <hr className='course-hr' />
                  <Card.Text>
                    <h6 className='course-h6-1'><img src={Clock} className='course-duration' alt='clock img'/>2 months</h6>
                    <p className='course-para'> <img src={Check} alt='tick' className='course-check' /> Learn Ethical Hacking from scratch.</p>
                    <p className='course-para'> <img src={Check} alt='tick' className='course-check' /> Start from 0 up to a high-intermediate level.</p>
                    <p className='course-para'> <img src={Check} alt='tick' className='course-check' /> Takes you from beginner to Advance level.</p>
                    <p className='course-para'> <img src={Check} alt='tick' className='course-check' /> <strong>Certification of Ethical Hacking.</strong></p>

                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header className='acc-header'>Course Content</Accordion.Header>
                        <Accordion.Body >
                          {Content1[0].map(item => <li className='content-list' >{item}</li>)}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
                  

                
            <div class="col-lg-6 course-card2 animate fadeInUp five">

              <Card className='course-card'>
                <Card.Img variant="top" className='course-img' src={Course2} />
                <Card.Body>
                  <Card.Title>Certification of Penetration Testing</Card.Title>
                  <hr className='course-hr' />
                  <Card.Text>
                    <h6 className='course-h6-1'><img src={Clock} className='course-duration' alt='clock img'/>3 months</h6>
                    <p className='course-para'> <img src={Check} alt='tick' className='course-check' /> Learn Penetration Testing from scratch.</p>
                    <p className='course-para'> <img src={Check} alt='tick' className='course-check' /> Exploit the vulnerabilities to hack into web servers.</p>
                    <p className='course-para'> <img src={Check} alt='tick' className='course-check' /> Become an Expert in pentesting.</p>
                    <p className='course-para'> <img src={Check} alt='tick' className='course-check' /> <strong>Certification of Penetration Testing.</strong></p>

                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header className='acc-header'>Course Content</Accordion.Header>
                        <Accordion.Body>
                          {Content1[1].map(item => <li className='content-list' >{item}</li>)}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>

            

          </div>
        
        </div>

        

        <Container>
          <Row className='course-overview-row'>
            {/* <Col></Col> */}

            <Col className='course-overview'>
              <img src={Presentation} alt="Logo" className='course-logo' />
              <h2>Hands On training</h2>
            </Col>

            

            <Col className='course-overview'>
              <img src={Rating} alt="Logo" className='course-logo' />
              <h2>Learn from Experts</h2>
            </Col>

            <Col className='course-overview'>
              <img src={Statistics} alt="Logo" className='course-logo' />
              <h2>Learn latest security trends</h2>
            </Col>

            <Col className='course-overview'>
              <img src={Save} alt="Logo" className='course-logo' />
              <h2>Courses offered at best prices</h2>
            </Col>

            {/* <Col></Col> */}
          </Row>
        </Container>

      </div>

      <Footer />
    </div>
  );
}


