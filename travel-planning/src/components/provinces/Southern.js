import React from "react";
import { useNavigate } from "react-router-dom";
import "./Southern.css"; // Use specific CSS for each province

const Southern = () => {
  const navigate = useNavigate();

  const places = [
    {
      name: "Galle",
      description:
        "Galle is known for its colonial architecture, ancient fort, and beautiful beaches, offering a mix of history and coastal beauty.",
      image: "/assets/galle.jpg",  // Path relative to the public directory
      route: "/galle",
    },
    {
      name: "Mirissa",
      description:
        "Mirissa is famous for its golden beaches, whale watching, and vibrant nightlife, making it a popular destination for relaxation and adventure.",
      image: "/assets/mirissa.jpg",  // Path relative to the public directory
      route: "/mirissa",
    },
    {
      name: "Tangalle",
      description:
        "Tangalle offers a serene atmosphere with pristine beaches, making it a great place for those looking to escape the crowds.",
      image: "/assets/tangalle.jpg",  // Path relative to the public directory
      route: "/tangalle-hotels",
    },
  ];

  return (
    <div className="southern-container">
      <header className="southern-header">
        <h1>Welcome to Southern Province</h1>
        <p>Explore the coastal beauty and history of the South</p>
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

export default Southern;

