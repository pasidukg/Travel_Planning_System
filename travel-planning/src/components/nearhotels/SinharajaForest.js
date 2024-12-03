import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SinharajaForest.css";

const SinharajaForest = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Sinharaja Eco Lodge",
      description:
        "An eco-friendly lodge offering an immersive experience in the heart of the Sinharaja rainforest.",
      image: "/assets/sinharaja-eco-lodge.jpg",
      stars: 4,
    },
    {
      name: "Rainforest Retreat",
      description:
        "A secluded retreat surrounded by dense jungle, ideal for nature walks and birdwatching.",
      image: "/assets/rainforest-retreat.jpg",
      stars: 3,
    },
    {
      name: "Forest Hideaway Resort",
      description:
        "A hidden resort amidst the rainforest, offering luxury accommodations with nature at its doorstep.",
      image: "/assets/forest-hideaway-resort.jpg",
      stars: 5,
    },
    {
      name: "Sinharaja View Bungalow",
      description:
        "A bungalow with panoramic views of the Sinharaja forest, offering tranquility and comfort.",
      image: "/assets/sinharaja-view-bungalow.jpg",
      stars: 5,
    },
    {
      name: "Jungle Haven",
      description:
        "A charming haven tucked away in the jungle, providing a peaceful retreat surrounded by natural beauty.",
      image: "/assets/jungle-haven.jpg",
      stars: 3,
    }
  ];

  const photos = [
    "/assets/sinharaja-1.jpg",
    "/assets/sinharaja-2.jpg",
    "/assets/sinharaja-3.jpg",
  ];

  const [activePhoto, setActivePhoto] = useState(null);

  const renderStars = (stars) =>
    Array(stars)
      .fill("⭐")
      .join("");

  return (
    <div className="sinharaja-container">
      {/* Header */}
      <header className="sinharaja-header">
        <h1>Hotels Near Sinharaja Forest</h1>
        <p>
          Immerse yourself in the beauty of Sinharaja, Sri Lanka's last remaining tropical rainforest.
        </p>
      </header>

      {/* Photo Slideshow */}
      <div className="photo-slideshow">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Sinharaja Forest ${index + 1}`}
            className="slideshow-image"
            onClick={() => setActivePhoto(photo)}
          />
        ))}
      </div>

      {/* Full-Size Image Modal */}
      {activePhoto && (
        <div className="modal" onClick={() => setActivePhoto(null)}>
          <img src={activePhoto} alt="Full-size view" className="modal-image" />
        </div>
      )}

      {/* Hotels List */}
      <h1 className="h2">Hotels Near Sinharaja Forest</h1>
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
              <h2>{hotel.name}</h2>
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

export default SinharajaForest;
