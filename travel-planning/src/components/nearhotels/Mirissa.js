import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mirissa.css";

const Mirissa = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Paradise Beach Club",
      description:
        "A beachfront resort offering stunning views, an infinity pool, and direct access to Mirissa Beach.",
      image: "/assets/paradise-beach-club.jpg",
      stars: 5,
    },
    {
      name: "The Secret Guesthouse",
      description:
        "A cozy and affordable guesthouse with a serene garden and close proximity to Mirissa's Whale Watching harbor.",
      image: "/assets/secret-guesthouse.jpg",
      stars: 4,
    },
    {
      name: "Sri Sharavi Beach Villas",
      description:
        "Luxury villas with private pools, spa facilities, and gourmet dining overlooking the Indian Ocean.",
      image: "/assets/sharavi-villas.jpg",
      stars: 5,
    },
    {
        name: "Paradise Beach Club",
        description:
          "A beachfront resort offering stunning views, an infinity pool, and direct access to Mirissa Beach.",
        image: "/assets/paradise-beach-club.jpg",
        stars: 5,
      },
      {
        name: "The Secret Guesthouse",
        description:
          "A cozy and affordable guesthouse with a serene garden and close proximity to Mirissa's Whale Watching harbor.",
        image: "/assets/secret-guesthouse.jpg",
        stars: 4,
      },
  ];

  const photos = [
    "/assets/mirissa1.jpg",
    "/assets/mirissa2.jpg",
    "/assets/mirissa3.jpg",
  ];

  const [activePhoto, setActivePhoto] = useState(null);

  const renderStars = (stars) =>
    Array(stars)
      .fill("⭐")
      .join("");

  return (
    <div className="mirissa-container">
      <header className="mirissa-header">
        <h1>Hotels in Mirissa</h1>
        <p>
          Enjoy the serene beaches of Mirissa and stay at these top-rated hotels
          for a perfect vacation.
        </p>
      </header>

      <div className="photo-slideshow">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Mirissa Photo ${index + 1}`}
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

      <h2 className="hotels-heading">Top Hotels in Mirissa</h2>
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

export default Mirissa;
