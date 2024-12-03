import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookPage.css";

const BookPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel } = location.state || {}; // Retrieve selected hotel info

  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [numRooms, setNumRooms] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  if (!hotel) {
    return <p>No hotel selected. Go back and choose a hotel to book!</p>;
  }

  const roomTypes = [
    { type: "Single Room", price: "$50/night" },
    { type: "Double Room", price: "$75/night" },
    { type: "Suite", price: "$120/night" },
  ];

  const handleBooking = () => {
    if (selectedRoomType && numRooms && checkInDate && checkOutDate) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        navigate(-1); // Go back after success message
      }, 2000);
    } else {
      alert("Please fill out all fields before booking.");
    }
  };

  return (
    <div className="book-page-container">
      {/* Hotel Details */}
      <div className="hotel-details">
        <h1>Book Your Stay at {hotel.name}</h1>
        <p>{hotel.description}</p>
      </div>

      {/* Hotel Images */}
      <div className="hotel-images">
        {[1, 2, 3, 4, 5].map((num) => (
          <img
          key={num}
          src={`/assets/hotel${num}.jpg`} // Assuming you have images like abc-1.png, abc-2.png, etc.
          alt={`Hotel image ${num}`}
          className="hotel-image"
        />
        ))}
      </div>

      {/* Booking Form */}
      <div className="booking-form">
        <h2>Room Availability</h2>
        <div className="form-group">
          <label htmlFor="roomType">Select Room Type:</label>
          <select
            id="roomType"
            value={selectedRoomType}
            onChange={(e) => setSelectedRoomType(e.target.value)}
          >
            <option value="">--Select Room Type--</option>
            {roomTypes.map((room, index) => (
              <option key={index} value={room.type}>
                {room.type} ({room.price})
              </option>
            ))}
          </select>
        </div> 

        <div className="form-group">
          <label htmlFor="numRooms">Number of Rooms:</label>
          <input
            type="number"
            id="numRooms"
            min="1"
            max="10"
            value={numRooms}
            onChange={(e) => setNumRooms(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>

        <button className="book-now-button" onClick={handleBooking}>
          Book Now
        </button>
      </div>

      {/* Success Message */}
      {showMessage && <div className="success-message">Hotel Successfully Booked!</div>}
    </div>
  );
};

export default BookPage;
