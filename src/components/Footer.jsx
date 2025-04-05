import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaTiktok, FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-column">
          <h2 className="footer-logo">Beta Clinic</h2>
          <p className="footer-description">
            Delivering world-class healthcare solutions. Quality services with a focus on patient satisfaction.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/testimonials">Reviews</Link></li>
            <li><Link to="/doctors">Services</Link></li>
            <li><Link to="/branches">Branches</Link></li>
            <li><Link to="/contacts">Message us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Social Media and Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            <a href="tel:+254718101010"><FaPhoneAlt /> 0718 101 010</a>
            <a href="https://wa.me/254718101010" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="whatsapp-icon" />
            </a>
          </p>
          <p>
            <a href="tel:+254722616024"><FaPhoneAlt /> 0722 616 024</a>
            <a href="https://wa.me/254722616024" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="whatsapp-icon" />
            </a>
          </p>
          <p>
            <a href="tel:+254721204033"><FaPhoneAlt /> 0721 204 033</a>
            <a href="https://wa.me/254721204033" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="whatsapp-icon" />
            </a>
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/@Dr0718101010/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com/23c2a29a04fb4a2?t=NH2Z-z7qoLqopaSMl1Pqrw&s=08" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com/@drngechu6599?si=WKKdPILrOoCd49b7" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@dr.ngechu?_t=8q9S2e8Xq9G&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="footer-column">
          <h3>Branch Locations</h3>
          <ul className="footer-branches">
            <li><a href="https://goo.gl/maps/example1" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Kayole Masimba stage</a></li>
            <li><a href="https://g.co/kgs/ivoXywC" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Githurai</a></li>
            <li><a href="https://maps.app.goo.gl/XUWGRwp4DpK1o65MA" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Thika</a></li>
            <li><a href="https://maps.app.goo.gl/T6wizpi2w7UzYedt9" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Kawangware</a></li>
            <li><a href="https://maps.app.goo.gl/SrSyeW512EEGPasR8" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Naivasha</a></li>
            <li><a href="https://g.co/kgs/LN5AtSG" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Eldoret</a></li>
            <li><a href="https://maps.app.goo.gl/psxujoQVPVpFGeSF6" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Mombasa</a></li>
            <li><a href="https://maps.app.goo.gl/h8rrU3PkS3Ao7wVu5" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Nakuru</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Beta Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
