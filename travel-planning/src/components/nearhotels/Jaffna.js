import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Jaffna.css";

const Jaffna = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Jetwing Jaffna",
      description:
        "A luxury hotel in the heart of Jaffna offering modern amenities and traditional charm.",
      image: "/assets/jetwing-jaffna.jpg",
      stars: 5,
    },
    {
      name: "North Gate by Jetwing",
      description:
        "A premium hotel with a perfect blend of comfort and local culture, located close to key attractions.",
      image: "/assets/north-gate.jpg",
      stars: 4,
    },
    {
      name: "Valampuri Hotel",
      description:
        "A comfortable stay with a touch of traditional Jaffna hospitality and beautiful interiors.",
      image: "/assets/valampuri.jpg",
      stars: 4,
    },
    {
      name: "Green Grass Hotel",
      description:
        "A family-friendly hotel with lush gardens and easy access to Jaffna's iconic landmarks.",
      image: "/assets/green-grass.jpg",
      stars: 3,
    },
    {
      name: "Tilko Jaffna City Hotel",
      description:
        "A centrally located hotel offering convenience, comfort, and excellent service.",
      image: "/assets/tilko.jpg",
      stars: 4,
    },
  ];

  const photos = [
    "/assets/jaffna1.jpg",
    "/assets/jaffna2.jpg",
    "/assets/jaffna3.jpg",
  ];

  const [activePhoto, setActivePhoto] = useState(null);

  const renderStars = (stars) =>
    Array(stars)
      .fill("⭐")
      .join("");

  return (
    <div className="jaffna-container">
      <header className="jaffna-header">
        <h1>Hotels in Jaffna</h1>
        <p>
          Explore the vibrant culture and stunning landmarks of Jaffna while
          staying at these highly recommended hotels.
        </p>
      </header>

      <div className="photo-slideshow">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Jaffna Photo ${index + 1}`}
            className="slideshow-image"
            onClick={() => setActivePhoto(photo)}
          />
        ))}
      </div>

      {activePhoto && (
        <div className="modal" onClick={() => setActivePhoto(null)}>
          <img src={activePhoto} alt="Full-size view" className="modal-image" />
        </div>
      )}

      <h2 className="hotels-heading">Top Hotels in Jaffna</h2>
      <div className="hotels-list">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="hotel-image"
              onClick={() => setActivePhoto(hotel.image)}
            />
            <div className="hotel-details">
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
              <div className="hotel-stars">{renderStars(hotel.stars)}</div>
              <button
                className="book-button"
                onClick={() => navigate("/book", { state: { hotel } })}
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jaffna;
