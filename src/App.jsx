import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Doctors from './components/Doctors.jsx';
// import Branches from './components/Branches.jsx'; // Commented out the Branches import

import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';
import Testimonials from './components/Testimonials.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        {/* <Route path="/branches" element={<Branches />} /> */} {/* Commented out the Branches route */}
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    <Footer/>
    </Router>
  );
};

export default App;
