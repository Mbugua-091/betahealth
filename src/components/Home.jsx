import './Home.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // optional blur effect
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

import doctorImage from '../assets/doctor2.jpg';
import workersImage from '../assets/workers.jpg';
import tools1Image from '../assets/dj.jpg';
import tools5Image from '../assets/doctor.jpg';
import cit1Image from '../assets/tools5.jpg';
import tools2Image from '../assets/tools1.jpg';

const Home = () => {
  const images = [
    { src: doctorImage, description: "Our expert doctors are dedicated to providing personalized care tailored to your needs." },
    { src: workersImage, description: "Our compassionate healthcare workers ensure a comfortable and supportive environment." },
    { src: tools1Image, description: "Equipped with the latest medical technology, we guarantee precise diagnostics and effective treatments." },
    { src: tools5Image, description: "We prioritize safety and hygiene, implementing rigorous protocols for your health." },
    { src: cit1Image, description: "At Beta Clinic, we are committed to bettering health through community outreach and education." },
    { src: tools2Image, description: "Our advanced surgical tools empower our doctors to perform complex procedures with exceptional accuracy." }
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Beta Health Clinic</h1>
        <p>
          Your health is our priority. Experience world-class healthcare services delivered by a dedicated team of professionals who are committed to your well-being.
        </p>
      </section>

      <section className="image-gallery">
        <h2>Our Collections</h2>
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <LazyLoadImage
                src={image.src}
                alt={`Service ${index + 1}`}
                effect="blur" // adds a blur effect while loading
              />
              <p className="image-description">{image.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Floating WhatsApp icon with inline styling */}
      <a 
        href="https://wa.me/254722616024" // WhatsApp link
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25d366',
          padding: '10px',
          borderRadius: '50%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#128c7e'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25d366'}
      >
        <FaWhatsapp style={{ color: 'white', fontSize: '2rem' }} />
        <div 
          style={{
            display: 'none',
            fontSize: '1rem',
            color: 'white',
            marginTop: '5px',
            position: 'absolute',
            bottom: '50px',
            right: '0',
            backgroundColor: '#128c7e',
            padding: '5px',
            borderRadius: '3px',
          }}
          className="whatsapp-text"
        >
          WhatsApp Now
        </div>
      </a>
    </div>
  );
};

export default Home;
