import React from "react";
import { useNavigate } from "react-router-dom";
import "./Western.css"; // Use specific CSS for each province

const Western = () => {
  const navigate = useNavigate();

  const places = [
    {
      name: "Colombo",
      description:
        "Colombo, the commercial capital, is a bustling city with vibrant markets, colonial architecture, and scenic coastal views.",
      image: "/assets/colombo.jpg",  // Path relative to the public directory
      route: "/colombo",
    },
    {
      name: "Negombo",
      description:
        "Negombo is a popular beach destination near Colombo, known for its lively fishing community and golden beaches.",
      image: "/assets/negombo.jpg",  // Path relative to the public directory
      route: "/negombo",
    },
    {
      name: "Bentota",
      description:
        "Bentota is a coastal town offering a range of water sports, serene beaches, and luxury resorts perfect for a tropical getaway.",
      image: "/assets/bentota.jpg",  // Path relative to the public directory
      route: "/bentota",
    },
  ];

  return (
    <div className="western-container">
      <header className="western-header">
        <h1>Welcome to Western Province</h1>
        <p>Discover the vibrant life and coastal beauty of the West</p>
      </header>

      <div className="places-grid">
        {places.map((place, index) => (
          <div
            key={index}
            className="place-card"
            onClick={() => navigate(place.route)}
          >
            <img
              src={place.image} // Use the relative path to the image in the public folder
              alt={place.name}
              className="place-image"
            />
            <div className="place-description">
              <h2>{place.name}</h2>
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Western;

