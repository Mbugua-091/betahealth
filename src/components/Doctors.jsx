import React from 'react';
import './Doctors.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // for the blur effect

// Importing images
import doctor1 from '../assets/cit1.jpg';
import doctor2 from '../assets/cit2.jpg';
import doctor3 from '../assets/cit3.jpg';
import doctor4 from '../assets/cit4.jpg';
import doctor5 from '../assets/ino 2.jpg';
import doctor6 from '../assets/ino 3.jpg';
import doctor7 from '../assets/ino 4.jpg';
import doctor9 from '../assets/ino 6.jpg';
import doctor10 from '../assets/newinooro.jpg';
import doctor11 from '../assets/newinooro1.jpg';
import doctor12 from '../assets/newcitizen.jpg';
import doctor13 from '../assets/medi1.jpg';

const doctorData = [
  { src: doctor1, alt: "Doctor 1 on Citizen TV", desc: "Dr Ngechu Interview on Citizen TV: Discussing health matters and offering medical insights." },
  { src: doctor2, alt: "Doctor 2 on Citizen TV", desc: "Health segment on Citizen TV: Sharing expert opinions on patient care." },
  { src: doctor3, alt: "Doctor 3 on Citizen TV", desc: "Citizen TV appearance: A discussion on public health improvements." },
  { src: doctor4, alt: "Doctor 4 on Citizen TV", desc: "Speaking about health awareness on Citizen TV." },
  { src: doctor5, alt: "Doctor 5 on Inooro TV", desc: "Inooro TV interview: Highlighting health challenges and solutions." },
  { src: doctor6, alt: "Doctor 6 on Kameme TV", desc: "Kameme TV panel discussion: Participating with four other doctors on a health panel." },
  { src: doctor7, alt: "Doctor 7 on Inooro TV", desc: "Another appearance on Inooro TV: Speaking on healthcare innovations." },
  { src: doctor9, alt: "Doctor 9 on Kameme TV", desc: "Kameme TV panel: Discussing healthcare practices and policies." },
  { src: doctor10, alt: "Doctor 10 on Inooro TV", desc: "Inooro TV interview: Focusing on preventive healthcare measures." },
  { src: doctor11, alt: "Doctor 11 on Inooro TV", desc: "Inooro TV: Discussing medical advancements and public awareness." },
  { src: doctor12, alt: "Doctor 12 on Citizen TV", desc: "Interview on Citizen TV: Delving into community health projects." },
  { src: doctor13, alt: "Doctor 13 on Citizen TV", desc: "Dr Ngechu's picture during a medical discussion interview." }
];

const Doctors = () => {
  return (
    <div className="doctors-gallery">
      {doctorData.map((doctor, index) => (
        <div className="doctor-item" key={index}>
          <LazyLoadImage
            src={doctor.src}
            alt={doctor.alt}
            effect="blur"
          />
          <p>{doctor.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Doctors;
