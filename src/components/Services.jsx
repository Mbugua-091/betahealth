import React, { useState, useRef, useEffect } from 'react';
import './Services.css';

// LazyVideo component
const LazyVideo = ({ src, poster, width = 320, height = 240 }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef}>
      {isVisible && (
        <video width={width} height={height} controls preload="none" poster={poster}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

const Services = () => {
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const toggleSubcategory = (index) => {
    setActiveSubcategory(activeSubcategory === index ? null : index);
  };

  const services = [
    {
      category: "Diagnostics",
      video: "/diagnosis.mp4",
      poster: "/poster-diagnosis.jpg",
      subcategories: [
        { name: "General Consultation", description: "A thorough examination and discussion with a healthcare provider to determine your medical needs." },
        { name: "Lab Services", description: "A variety of lab tests including blood work, urine analysis, and more to diagnose and monitor conditions." },
        { name: "X-Ray", description: "Advanced imaging to assist in diagnosing bone, joint, and chest conditions." },
        { name: "Ultrasound", description: "Non-invasive imaging to view organs, tissues, and monitor pregnancies." },
      ],
    },
    {
      category: "Clinics",
      video: "/clinics.mp4",
      poster: "/poster-clinics.jpg",
      subcategories: [
        { name: "Nutritional Clinics", description: "Expert advice on diet and nutrition for improved health and well-being." },
        { name: "Fertility Clinics", description: "Consultation and treatment for reproductive health and fertility issues." },
        { name: "Gastroenterology", description: "Specialized care for digestive system issues, including stomach and intestinal health." },
        { name: "Diabetes & Hypertension", description: "Management and treatment options for diabetes and high blood pressure." },
        { name: "Libido Clinics", description: "Consultations to address concerns related to sexual health and libido." },
        { name: "Arthritis", description: "Treatment and management options for joint pain and arthritis." },
      ],
    },
    {
      category: "Wellness",
      video: "/wellnes.mp4",
      poster: "/poster-wellness.jpg",
      subcategories: [
        { name: "Herbal Remedies", description: "Natural remedies to promote overall health and manage specific health issues." },
        { name: "Skincare", description: "Treatments for a variety of skin conditions, promoting healthy and glowing skin." },
        { name: "Weight Management", description: "Personalized weight loss and management programs." },
        { name: "Guidance and Counseling", description: "Support for mental health, emotional issues, and general life guidance." },
      ],
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>

      {services.map((service, index) => (
        <div key={index} className="service-category">
          <h3>{service.category}</h3>
          <div className="service-video">
            <LazyVideo src={service.video} poster={service.poster} width={640} height={360} />
          </div>
          {service.subcategories.map((subcategory, subIndex) => (
            <div key={subIndex} className="subcategory">
              <div
                className="subcategory-header"
                onClick={() => toggleSubcategory(`${index}-${subIndex}`)}
              >
                <h4>{subcategory.name}</h4>
                <span>{activeSubcategory === `${index}-${subIndex}` ? '-' : '+'}</span>
              </div>
              {activeSubcategory === `${index}-${subIndex}` && (
                <div className="subcategory-content">
                  <p>{subcategory.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}

      {/* Section for Interview Videos */}
      <h3>Interview with Dr. Ngetchu on Women's Reproductive Health</h3>
      <div className="interview-section">
        <div className="interview-video">
          <h4>Understanding Women's Reproductive Health</h4>
          <LazyVideo src="/intaview1.mp4" poster="/poster-interview1.jpg" />
          <p>
            In this interview, Dr. Ngetchu discusses key aspects of women's reproductive health,
            focusing on common concerns and the importance of awareness.
          </p>
        </div>

        <div className="interview-video">
          <h4>Addressing Challenges in Women's Health</h4>
          <LazyVideo src="/intaview2.mp4" poster="/poster-interview2.jpg" />
          <p>
            Dr. Ngetchu delves into the challenges women face when it comes to reproductive health
            and offers advice on managing these issues effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
