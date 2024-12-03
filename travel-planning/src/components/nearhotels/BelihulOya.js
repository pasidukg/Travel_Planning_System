import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BelihulOya.css";

const BelihulOya = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Belihul Oya Rest House",
      description:
        "A tranquil rest house with serene views of the Belihul Oya river, perfect for relaxation and nature walks.",
        image: "/assets/hotel2.jpg",
        stars: 4,
    },
    {
      name: "Pinewood Lodge",
      description:
        "A cozy lodge surrounded by pine forests and misty mountains, offering a peaceful retreat.",
        image: "/assets/hotel4.jpg",
        stars: 3,
    },
    {
      name: "Green View Resort",
      description:
        "A resort offering panoramic views of Belihul Oya's lush greenery, perfect for nature lovers.",
        image: "/assets/hotel6.jpg",
        stars: 5,
    },
    {
      name: "River Bend Villa",
      description:
        "A luxury villa located at the river bend, providing a relaxing stay with riverfront views.",
        image: "/assets/hotel8.jpg",
        stars: 5,
    },
    {
      name: "Mountain Retreat",
      description:
        "A hidden gem nestled in the mountains, offering stunning views and a peaceful environment.",
        image: "/assets/hotel10.jpg",
        stars: 3,
    }
  ];

  const photos = [
    "/assets/belihuloya.jpg",
    "/assets/belihuloya2.jpg",
    "/assets/belihuloya1.jpg",
  ];

  const [activePhoto, setActivePhoto] = useState(null);

  const renderStars = (stars) =>
    Array(stars)
      .fill("⭐")
      .join("");

  return (
    <div className="belihul-oya-container">
      {/* Header */}
      <header className="belihul-oya-header">
        <h1>Hotels Near Belihul Oya</h1>
        <p>
          Explore the calm and scenic Belihul Oya, surrounded by mountains and lush greenery.
        </p>
      </header>

      {/* Photo Slideshow */}
      <div className="photo-slideshow">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Belihul Oya ${index + 1}`}
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
      <h1 className="h2">Hotels Near Belihul Oya</h1>
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

export default BelihulOya;
