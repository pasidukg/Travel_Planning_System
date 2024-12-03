import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css'; // Ensure you have your Welcome.css for styling

const Welcome = () => {
  const navigate = useNavigate();

  // Navigate to the Home page
  const handleTravelerClick = () => {
    navigate('/home');
  };

  // Navigate to the Hotel Register page
  const handleHotelierClick = () => {
    navigate('/hotel-register');
  };

  return (
    <div className="container">
      <h1 className='h1'>Welcome To Travel Sri Lanka 🙏🏻</h1>
      <div className="buttons-container">
        <button className="button traveler" onClick={handleTravelerClick}>
          <div className="image traveler-img"></div>
          <p>Traveler</p>
        </button>
        <button className="button hotelier" onClick={handleHotelierClick}>
          <div className="image hotelier-img"></div>
          <p>Hotelier</p>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
