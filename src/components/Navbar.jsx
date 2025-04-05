import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaUserMd, FaMapMarkedAlt, FaMoneyBillWave, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
import logo from "../assets/logo 1.jpg"; // Import the logo image

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Hospital Logo" className="logo-image" loading='lazy'/> {/* Add logo here */}
        </Link>
      </div>
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li><Link to="/" onClick={closeMenu}><FaHome /> Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}><FaInfoCircle /> About</Link></li>
        <li><Link to="/services" onClick={closeMenu}><FaServicestack /> Services</Link></li>
        <li><Link to="/doctors" onClick={closeMenu}><FaUserMd />Blogs</Link></li>
        <li><Link to="/branches" onClick={closeMenu}><FaMapMarkedAlt /> Our Branches</Link></li>
        <li><Link to="/testimonials" onClick={closeMenu}><FaMoneyBillWave /> Reviews</Link></li>
        <li><Link to="/contacts" onClick={closeMenu}><FaEnvelope /> Message Us</Link></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
