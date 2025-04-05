import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; // Import WhatsApp and Call icons
import './Contacts.css'; // Import CSS for styling

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h2>Contact Us</h2>
      <h3>Click the WhatsApp or Call button to get in touch instantly!</h3>

      {/* Floating WhatsApp icon */}
      <a 
        href="https://wa.me/254722616024" // WhatsApp link
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-icon-link"
      >
        <FaWhatsapp className="whatsapp-icon" />
        {/* WhatsApp hover text */}
        <div className="icon-text whatsapp-text">WhatsApp Now</div>
      </a>

      {/* Floating Call icon */}
      <a 
        href="tel:+254722616024" // Phone number link for calling
        className="call-icon-link"
      >
        <FaPhoneAlt className="call-icon" />
        {/* Call hover text */}
        <div className="icon-text call-text">Call Now</div>
      </a>
    </div>
  );
};

export default Contacts;
