import React from "react";
import { useNavigate } from "react-router-dom";
import "./Northern.css"; // Use specific CSS for each province

const Northern = () => {
  const navigate = useNavigate();

  const places = [
    {
      name: "Jaffna",
      description:
        "Jaffna is known for its rich cultural heritage, ancient temples, and beautiful beaches, offering a unique blend of history and natural beauty.",
      image: "/assets/jaffna.jpg",  // Path relative to the public directory
      route: "/jaffna",
    },
    {
      name: "Mannar",
      description:
        "Mannar is a coastal town famous for its rich birdlife, sandy beaches, and the historical Mannar Fort.",
      image: "/assets/mannar.jpg",  // Path relative to the public directory
      route: "/mannar",
    },
    {
      name: "Kilinochchi",
      description:
        "Kilinochchi is a serene destination offering a glimpse into rural life and the beauty of Sri Lanka’s northern landscapes.",
      image: "/assets/kilinochchi.jpg",  // Path relative to the public directory
      route: "/kilinochchi",
    },
  ];

  return (
    <div className="northern-container">
      <header className="northern-header">
        <h1>Welcome to Northern Province</h1>
        <p>Discover the history and tranquility of the North</p>
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

export default Northern;

