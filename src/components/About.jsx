import React from 'react';
import './About.css'; // Import your CSS file for styling

// Import your images
import teamImage from '../assets/workers.jpg'; // Replace with your actual image filenames
import missionImage from '../assets/tools5.jpg';
import valuesImage from '../assets/tools1.jpg';
import historyImage from '../assets/workers.jpg';

const About = () => {
  return (
    <div className="about">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          Welcome to Beta Clinic! Our commitment is to provide you with the highest quality healthcare services
          tailored to your needs. Our team of dedicated professionals is here to ensure your health and well-being.
        </p>
      </section>

      <section className="about-details">
        <div className="about-card">
          {/* Uncomment this line to display the image */}
          {/* <img src={missionImage} alt="Our Mission" className="about-image" /> */}
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver compassionate and comprehensive healthcare services to our patients,
            improving their quality of life through innovative treatments and patient-centered care.
          </p>
        </div>

        <div className="about-card">
          {/* Uncomment this line to display the image */}
          {/* <img src={valuesImage} alt="Our Values" className="about-image" /> */}
          <h2>Our Values</h2>
          <p>
            At Beta Clinic, we value integrity, compassion, and excellence. We believe in treating our patients
            with respect and dignity, ensuring that every individual receives personalized care.
          </p>
        </div>

        <div className="about-card">
          {/* Uncomment this line to display the image */}
          {/* <img src={teamImage} alt="Our Team" className="about-image" /> */}
          <h2>Our Team</h2>
          <p>
            Our team is comprised of highly skilled healthcare professionals dedicated to providing the best
            possible care. Each member brings unique expertise and a shared commitment to your health.
          </p>
        </div>

        <div className="about-card">
          {/* Uncomment this line to display the image */}
          {/* <img src={historyImage} alt="Our History" className="about-image" /> */}
          <h2>Our History</h2>
          <p>
            Established in 2024, Beta Clinic has grown to become a trusted name in healthcare, known for our
            innovative approaches and patient-focused services. We have continuously evolved to meet the
            changing needs of our community.
          </p>
        </div>
      </section>

      {/* New Section for Opening Hours and Consultation Pricing in one card */}
      <section className="about-hours-pricing">
        <div className="about-card pricing-card">
          <h2>Opening Hours</h2>
          <p>Every day: 8 AM - 7 PM</p>
          <h2>Consultation Pricing</h2>
          <p>Our consultation fee is 500 Ksh</p>
        </div>
      </section>
    </div>
  );
};

export default About;
