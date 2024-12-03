import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdamsPeak.css";

const AdamsPeak = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Heaven's Rest Guest House",
      description:
        "A cozy guest house with mountain views and a friendly atmosphere, located just a short distance from Adam's Peak.",
      image: "/assets/hotel1.jpg",
      stars: 4,
    },
    {
      name: "White Elephant Hotel",
      description:
        "A comfortable hotel with modern amenities and great access to the Adam's Peak trailhead.",
        image: "/assets/hotel3.jpg",
        stars: 3,
    },
    {
      name: "Peak View Inn",
      description:
        "Experience breathtaking views of Adam's Peak from this comfortable and affordable inn.",
        image: "/assets/hotel5.jpg",
        stars: 5,
    },
    {
      name: "Sunset Hill Resort",
      description:
        "A peaceful resort offering stunning sunset views over the mountains, perfect for a relaxing retreat.",
        image: "/assets/hotel7.jpg",
        stars: 5,
    },
    {
      name: "Mountain Breeze Lodge",
      description:
        "A charming lodge located in the hills, offering fresh mountain air and panoramic views of the surrounding landscape.",
        image: "/assets/hotel9.jpg",
        stars: 3,
    }
    
    
  ];

  const photos = [
    "/assets/adam1.jpg",
    "/assets/adam2.jpg",
    "/assets/adam3.jpg",
    
  ];

  const [activePhoto, setActivePhoto] = useState(null);

  const renderStars = (stars) =>
    Array(stars)
      .fill("⭐")
      .join("");

  return (
    <div className="adams-peak-container">
      {/* Header */}
      <header className="adams-peak-header">
        <h1>Explore Adam's Peak</h1>
        <p>
          Discover some of the best places to stay while visiting the sacred
          Adam's Peak, known for its spiritual significance and stunning
          sunrise views.
        </p>
      </header>

      {/* Photo Slideshow */}
      <div className="photo-slideshow">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Adam's Peak ${index + 1}`}
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
      <h2 className="h2">Hotels Near Adam's Peak</h2>
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

export default AdamsPeak;
