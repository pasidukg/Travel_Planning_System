import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Galle.css";

const Galle = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Galle Fort Hotel",
      description:
        "Experience the history and charm of Galle with a stay in this luxurious hotel inside the iconic Galle Fort.",
      image: "/assets/galle-fort-hotel.jpg",
      stars: 5,
    },
    {
      name: "Jetwing Lighthouse",
      description:
        "A stunning beachfront property offering exceptional service and breathtaking views of the Indian Ocean.",
      image: "/assets/jetwing-lighthouse.jpg",
      stars: 5,
    },
    {
      name: "The Dutch House",
      description:
        "A boutique hotel featuring colonial architecture and lush gardens, perfect for a tranquil getaway.",
      image: "/assets/dutch-house.jpg",
      stars: 4,
    },
    {
        name: "Galle Fort Hotel",
        description:
          "Experience the history and charm of Galle with a stay in this luxurious hotel inside the iconic Galle Fort.",
        image: "/assets/galle-fort-hotel.jpg",
        stars: 5,
      },
      {
        name: "Jetwing Lighthouse",
        description:
          "A stunning beachfront property offering exceptional service and breathtaking views of the Indian Ocean.",
        image: "/assets/jetwing-lighthouse.jpg",
        stars: 5,
      },
  ];

  const photos = [
    "/assets/galle1.jpg",
    "/assets/galle2.jpg",
    "/assets/galle3.jpg",
  ];

  const [activePhoto, setActivePhoto] = useState(null);

  const renderStars = (stars) =>
    Array(stars)
      .fill("⭐")
      .join("");

  return (
    <div className="galle-container">
      <header className="galle-header">
        <h1>Hotels in Galle</h1>
        <p>
          Explore the vibrant history and serene beaches of Galle while staying
          at one of these top-rated hotels.
        </p>
      </header>

      <div className="photo-slideshow">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Galle Photo ${index + 1}`}
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

      <h2 className="hotels-heading">Top Hotels in Galle</h2>
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

export default Galle;
