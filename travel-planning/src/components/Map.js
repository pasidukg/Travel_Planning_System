import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="map-container">
      <header className="map-header">
        <h1>Find Your Locations</h1>
      </header>

      {/* Google Map Embed */}
      <div className="map-iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585973673!2d79.78616438944185!3d6.9220039463228975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1624265216453!5m2!1sen!2slk"
          width="100%" height="500px" style={{ border: '0' }} allowFullScreen="" loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
 
export default Map;
