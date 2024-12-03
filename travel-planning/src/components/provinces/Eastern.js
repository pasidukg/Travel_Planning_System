import React from "react";
import { useNavigate } from "react-router-dom";
import "./Eastern.css"; // Use specific CSS for each province

const Eastern = () => {
  const navigate = useNavigate();

  const places = [
    {
      name: "Trincomalee",
      description:
        "Trincomalee is famous for its beautiful beaches, historical sites, and the Koneswaram Temple with a stunning view of the ocean.",
      image: "/assets/trincomalee.jpg",  // Path relative to the public directory
      route: "/trincomalee",
    },
    {
      name: "Arugam Bay",
      description:
        "Arugam Bay is a popular destination for surfers, with its perfect waves, scenic beaches, and a laid-back atmosphere.",
      image: "/assets/arugam-bay.jpg",  // Path relative to the public directory
      route: "/arugambay",
    },
    {
      name: "Batticaloa",
      description:
        "Batticaloa is known for its beautiful lagoons, historical significance, and vibrant local culture.",
      image: "/assets/batticaloa.jpg",  // Path relative to the public directory
      route: "/batticaloa",
    },
  ];

  return (
    <div className="eastern-container">
      <header className="eastern-header">
        <h1>Welcome to Eastern Province</h1>
        <p>Experience the vibrant culture and scenic beauty of the East</p>
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

export default Eastern;

