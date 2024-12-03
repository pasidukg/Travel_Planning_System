import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Trincomalee.css";

const Trincomalee = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Jungle Beach by Uga Escapes",
      description:
        "A luxurious beachfront resort surrounded by tropical forest, offering private villas and fine dining.",
      image: "/assets/jungle-beach.jpg",
      stars: 5,
    },
    {
      name: "Trinco Blu by Cinnamon",
      description:
        "A modern hotel with panoramic views of the Indian Ocean, offering excellent dining and amenities.",
      image: "/assets/trinco-blu.jpg",
      stars: 4,
    },
    {
      name: "Pigeon Island Beach Resort",
      description:
        "A charming resort located near the famous Pigeon Island, ideal for snorkeling and marine adventures.",
      image: "/assets/pigeon-island.jpg",
      stars: 4,
    },
    {
        name: "Jungle Beach by Uga Escapes",
        description:
          "A luxurious beachfront resort surrounded by tropical forest, offering private villas and fine dining.",
        image: "/assets/jungle-beach.jpg",
        stars: 5,
      },
      {
        name: "Trinco Blu by Cinnamon",
        description:
          "A modern hotel with panoramic views of the Indian Ocean, offering excellent dining and amenities.",
        image: "/assets/trinco-blu.jpg",
        stars: 4,
      },
  ];

  const photos = [
    "/assets/trincomalee1.jpg",
    "/assets/trincomalee2.jpg",
    "/assets/trincomalee3.jpg",
  ];

  const [activePhoto, setActivePhoto] = useState(null);

  const renderStars = (stars) =>
    Array(stars)
      .fill("⭐")
      .join("");

  return (
    <div className="trincomalee-container">
      <header className="trincomalee-header">
        <h1>Hotels in Trincomalee</h1>
        <p>
          Explore the pristine beaches and rich history of Trincomalee while
          staying at these top-rated hotels.
        </p>
      </header>

      <div className="photo-slideshow">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Trincomalee Photo ${index + 1}`}
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

      <h2 className="hotels-heading">Top Hotels in Trincomalee</h2>
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

export default Trincomalee;
