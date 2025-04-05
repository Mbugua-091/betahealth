import React, { useState, useRef, useEffect } from 'react';
import './Services.css';
import { FaClinicMedical, FaHeartbeat, FaLeaf, FaStethoscope, FaMedkit, FaBone } from 'react-icons/fa';

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
      category: "Wellness",
      icon: <FaLeaf />, // Icon for Wellness
      video: "/Wellnes.mp4",
      poster: "/picha3.jpg",
      subcategories: [
        { name: "Herbal Remedies", description: "Our herbal remedies provide natural solutions to promote overall health and manage specific health concerns." },
        { name: "Skincare", description: "We offer treatments for various skin conditions, promoting healthy, glowing skin and restoring your confidence." },
        { name: "Weight Management", description: "Our personalized weight loss and management programs are designed to help you achieve and maintain a healthy weight." },
        { name: "Guidance and Counseling", description: "Our counseling services provide support for mental health, emotional challenges, and life guidance, ensuring you receive the care you need to thrive." },
      ],
    },
    {
      category: "Diagnostics",
      icon: <FaClinicMedical />, // Icon for Diagnostics
      video: "/Diagnosis.mp4",
      poster: "/picha1.jpg",
      subcategories: [
        { name: "General Consultation", description: "We offer comprehensive consultations where our experienced healthcare providers listen to your concerns and conduct a thorough examination to assess your medical needs." },
        { name: "Lab Services", description: "Our state-of-the-art lab services include a wide range of tests, from blood work to urine analysis, helping us diagnose and monitor your health conditions with precision." },
        { name: "X-Ray", description: "Our X-ray services offer advanced imaging to diagnose bone, joint, and chest conditions. The images are carefully analyzed by specialists to provide you with accurate results." },
        { name: "Ultrasound", description: "Non-invasive ultrasound services that allow us to view your organs, tissues, and monitor pregnancies. Our technicians use the latest equipment to provide clear, detailed results." },
      ],
    },
    {
      category: "Clinics",
      icon: <FaStethoscope />, // Icon for Clinics
      video: "/Clinics.mp4",
      poster: "picha2.jpg",
      subcategories: [
        { name: "Nutritional Clinics", description: "Our nutritional clinics provide expert advice on diet and nutrition to help you improve your overall health and well-being." },
        { name: "Fertility Clinics", description: "We offer consultations and treatments for reproductive health and fertility issues, providing comprehensive care and support for your family planning journey." },
        { name: "Gastroenterology", description: "Our gastroenterology clinics specialize in diagnosing and treating digestive system issues, including stomach, intestine, and liver problems." },
        { name: "Diabetes & Hypertension", description: "We provide comprehensive management and treatment options for diabetes and hypertension, helping you manage these conditions effectively." },
        { name: "Libido Clinics", description: "Our libido clinics focus on addressing concerns related to sexual health and libido, offering treatments and consultations tailored to your needs." },
        { name: "Arthritis", description: "We offer treatment and management options for arthritis, helping you manage joint pain and improve your quality of life." },
      ],
    },
 
    {
      category: "Emergency Care",
      icon: <FaMedkit />, // Icon for Emergency Care
      video: "/Emergency.mp4",
      poster: "/picha4.jpg",
      subcategories: [
        { name: "Emergency Services", description: "Our emergency services are available 24/7, providing immediate care for critical conditions and urgent medical situations." },
        { name: "First Aid Training", description: "We offer first aid training to empower individuals with life-saving skills and the knowledge to respond effectively to medical emergencies." },
      ],
    },
    {
      category: "Orthopedics",
      icon: <FaBone />, // Icon for Orthopedics
      video: "/Orthopedics.mp4",
      poster: "/picha5.jpg",
      subcategories: [
        { name: "Bone Fracture Treatment", description: "We provide advanced treatment for bone fractures, offering personalized care for a swift and effective recovery." },
        { name: "Joint Replacement", description: "Our orthopedic team specializes in joint replacement surgeries, ensuring a safe and successful recovery process." },
      ],
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>

      {services.map((service, index) => (
        <div key={index} className="service-category">
          <h3>{service.category} {service.icon}</h3> {/* Render icon here */}
          <div className="service-video">
            <LazyVideo src={service.video} poster={service.poster} width={640} height={360} />
          </div>
          {service.subcategories.map((subcategory, subIndex) => (
            <div key={subIndex} className="subcategory">
              <div className="subcategory-header" onClick={() => toggleSubcategory(`${index}-${subIndex}`)}>
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
    </div>
  );
};

export default Services;
