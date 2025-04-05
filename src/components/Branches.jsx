import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Branches.css';

const Branches = () => {
  return (
    <div className="branches-container">
      <h1 className="location-title">Our Branch Locations</h1>

      <ul className="footer-branches">
        <li><a href="https://goo.gl/maps/example1" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Kayole Masimba stage</a></li>
        <li><a href="https://g.co/kgs/ivoXywC" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Githurai</a></li>
        <li><a href="https://maps.app.goo.gl/XUWGRwp4DpK1o65MA" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Thika</a></li>
        <li><a href="https://maps.app.goo.gl/T6wizpi2w7UzYedt9" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Kawangware</a></li>
        <li><a href="https://maps.app.goo.gl/SrSyeW512EEGPasR8" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Naivasha</a></li>
        <li><a href="https://g.co/kgs/LN5AtSG" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Eldoret</a></li>
        <li><a href="https://maps.app.goo.gl/psxujoQVPVpFGeSF6" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Mombasa</a></li>
        <li><a href="https://maps.app.goo.gl/h8rrU3PkS3Ao7wVu5" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="location-icon" /> Nakuru</a></li>
      </ul>

      {/* Iframe Map Section */}
      <div className="location-section">
        {/* Location 1: Kayole Masimba stage */}
        <div className="location">
          <h2>Kayole Masimba stage</h2>
          <iframe
            src="https://goo.gl/maps/example1"
            width="100%"
            height={300}
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            title="Kayole Masimba stage"
          ></iframe>
        </div>

        {/* Location 2: Githurai */}
        <div className="location">
          <h2>Githurai</h2>
          <iframe
            src="https://g.co/kgs/ivoXywC"
            width="100%"
            height={300}
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            title="Githurai"
          ></iframe>
        </div>

        {/* Location 3: Thika */}
        <div className="location">
          <h2>Thika</h2>
          <iframe
            src="https://maps.app.goo.gl/XUWGRwp4DpK1o65MA"
            width="100%"
            height={300}
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            title="Thika"
          ></iframe>
        </div>

        {/* Location 4: Kawangware */}
        <div className="location">
          <h2>Kawangware</h2>
          <iframe
            src="https://maps.app.goo.gl/T6wizpi2w7UzYedt9"
            width="100%"
            height={300}
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            title="Kawangware"
          ></iframe>
        </div>

        {/* Location 5: Naivasha */}
        <div className="location">
          <h2>Naivasha</h2>
          <iframe
            src="https://maps.app.goo.gl/SrSyeW512EEGPasR8"
            width="100%"
            height={300}
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            title="Naivasha"
          ></iframe>
        </div>

        {/* Location 6: Eldoret */}
        <div className="location">
          <h2>Eldoret</h2>
          <iframe
            src="https://g.co/kgs/LN5AtSG"
            width="100%"
            height={300}
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            title="Eldoret"
          ></iframe>
        </div>

        {/* Location 7: Mombasa */}
        <div className="location">
          <h2>Mombasa</h2>
          <iframe
            src="https://maps.app.goo.gl/psxujoQVPVpFGeSF6"
            width="100%"
            height={300}
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            title="Mombasa"
          ></iframe>
        </div>

        {/* Location 8: Nakuru */}
        <div className="location">
          <h2>Nakuru</h2>
          <iframe
            src="https://maps.app.goo.gl/h8rrU3PkS3Ao7wVu5"
            width="100%"
            height={300}
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            title="Nakuru"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Branches;
