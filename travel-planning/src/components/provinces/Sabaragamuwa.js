import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sabaragamuwa.css";

const Sabaragamuwa = () => {
  const navigate = useNavigate();

  const places = [
    { 
      name: "Adam's Peak",
      description:
        "Adam's Peak, also known as Sri Pada, is a sacred mountain in Sri Lanka, famous for its breathtaking sunrise and religious significance.",
      image: "/assets/adam1.jpg",  // Path relative to the public directory
      route: "/adams-peak",
    },
    {
      name: "Belihul Oya",
      description:
        "A picturesque village known for its cool climate, waterfalls, and lush greenery, perfect for nature lovers.",
      image: "/assets/belihuloya.jpg",  // Path relative to the public directory
      route: "/belihul-oya",
    },
    {
      name: "Sinharaja Forest",
      description:
        "A UNESCO World Heritage Site, this rainforest is a biodiversity hotspot, ideal for trekking and wildlife enthusiasts.",
      image: "/assets/sinharaja.jpg",  // Path relative to the public directory
      route: "/sinharaja",
    },
  ];

  return (
    <div className="sabaragamuwa-container">
      <header className="sabaragamuwa-header">
        <h1>Welcome to Sabaragamuwa</h1>
        <p>Explore the hidden gems of this beautiful province</p>
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

export default Sabaragamuwa;
