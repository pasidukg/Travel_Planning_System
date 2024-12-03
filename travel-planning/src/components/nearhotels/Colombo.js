import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Colombo.css";

const Colombo = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Cinnamon Grand Colombo",
      description:
        "A luxury hotel located in the heart of Colombo, offering world-class dining and amenities.",
      image: "/assets/cinnamon-grand.jpg",
      stars: 5,
    },
    {
      name: "Shangri-La Colombo",
      description:
        "A premium hotel with stunning ocean views and state-of-the-art facilities for a perfect stay.",
      image: "/assets/shangri-la.jpg",
      stars: 5,
    },
    {
      name: "Galle Face Hotel",
      description:
        "A historic beachfront hotel known for its colonial charm and excellent service.",
      image: "/assets/galle-face.jpg",
      stars: 4,
    },
    {
      name: "Hilton Colombo",
      description:
        "A modern hotel offering excellent hospitality and located close to key landmarks.",
      image: "/assets/hilton.jpg",
      stars: 4,
    },
    {
      name: "The Kingsbury",
      description:
        "A luxurious property with breathtaking views of the Indian Ocean and exceptional dining options.",
      image: "/assets/kingsbury.jpg",
      stars: 5,
    },
  ];

  const photos = [
    "/assets/colombo1.jpg",
    "/assets/colombo2.jpg",
    "/assets/colombo3.jpg",
  ];

  const [activePhoto, setActivePhoto] = useState(null);

  const renderStars = (stars) =>
    Array(stars)
      .fill("⭐")
      .join("");

  return (
    <div className="colombo-container">
      <header className="colombo-header">
        <h1>Hotels in Colombo</h1>
        <p>
          Discover the vibrant capital city of Sri Lanka while staying at some
          of the best hotels Colombo has to offer.
        </p>
      </header>

      <div className="photo-slideshow">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Colombo Photo ${index + 1}`}
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

      <h2 className="hotels-heading">Top Hotels in Colombo</h2>
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

export default Colombo;
