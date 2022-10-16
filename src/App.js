import React from 'react';
import Navbar from './components/NavbarTop';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import Courses from './components/pages/Courses';
import News from './components/pages/News';
import About from './components/pages/About';
import Accreditation from './components/pages/Accreditation';

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/accreditation' element={<Accreditation />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
    </Router>
    </div>
  );
}

