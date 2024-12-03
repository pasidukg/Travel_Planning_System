import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Home.css';

const Home = () => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  const handleGoClick = () => {
    // Check if a province is selected, then navigate to the respective page
    if (selectedProvince) {
      navigate(`/${selectedProvince.toLowerCase().replace(/\s+/g, '-')}`); // Example: 'Central Province' -> '/central-province'
    } else {
      alert('Please select a province before proceeding.');
    }
  }; 

  const handleSetRouteClick = () => {
    navigate('/set-route'); // Navigate to the SetRoute page
  };

  return (
    <div className="home-container">
        <h1 className='h1'>AN ISLAND ESCAPE AWAITS YOU</h1>
      {/* Search Section */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Place You Wish To Visit..."
          className="search-bar"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      {/* Province Dropdown Section */}
      <div className="province-container">
        <select
          id="province-select"
          className="province-dropdown"
          value={selectedProvince}
          onChange={handleProvinceChange}
        >
          <option value="">Select a Province  </option>
          <option value="Sabaragamuwa">Sabaragamuwa</option>
          <option value="Southern">Southern</option>
          <option value="Eastern">Eastern</option>
          <option value="Western">Western</option>
          <option value="Northern">Northern</option>
        </select>
      </div>

      {/* Button Section */}
      <div className="button-container">
        <button className="go-btn" onClick={handleGoClick}>
          Go
        </button>
        <button className="set-route-btn" onClick={handleSetRouteClick}>
          Set Your Route ➤
        </button>
      </div>

      {/* Blog Feed Section */}
      <div className="blog-feed-container">
        <h1>Blog Feed</h1>
        <div className="blog-item">
          <img src="/assets/blog1.jpg" alt="Blog Image 1" />
          <p>Sigiriya, also known as the "Lion's Rock," is one of Sri Lanka's most iconic landmarks. Located in the central part of the island, this ancient rock fortress dates back to the 5th century AD. A UNESCO World Heritage site, it features frescoes, an impressive water garden, and the famous Lion's Gate. The climb to the summit offers stunning panoramic views of the surrounding countryside.</p>
        </div>
        <div className="blog-item">
          <img src="/assets/blog2.jpg" alt="Blog Image 2" />
          <p>Sri Lankan cultural dance is a lively and colorful expression of the countrys rich heritage. Traditional dance forms like Kandyan, Low Country, and Sabaragamuwa dances showcase unique rhythms, movements, and vibrant costumes. These dances are often performed during festivals, ceremonies, and religious rituals, offering a glimpse into the island's cultural richness.</p>
        </div>
        <div className="blog-item">
          <img src="/assets/blog3.jpg" alt="Blog Image 3" />
          <p>Sri Lanka is home to several deer species, including the Sri Lankan Axis Deer, known for its distinct white spots. These majestic creatures roam the country's forests and national parks, such as Yala and Wilpattu. The sight of deer grazing peacefully amidst Sri Lanka’s stunning landscapes is truly a sight to behold.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
