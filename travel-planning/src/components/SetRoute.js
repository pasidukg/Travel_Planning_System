import React, { useState, useEffect } from 'react';
import './SetRoute.css';

const SetRoute = () => {
  const [travelPoint, setTravelPoint] = useState(''); // Input for a single travel point
  const [travelPoints, setTravelPoints] = useState([]); // List of travel points

  // Function to persist data in localStorage
  const persistData = (newList) => {
    localStorage.setItem('travelPoints', JSON.stringify({ travelPoints: newList }));
  };

  // Add a travel point
  const handleAddPoint = () => {
    if (travelPoint.trim() !== '') {
      const newPointList = [...travelPoints, travelPoint.trim()];
      persistData(newPointList); // Save updated list to localStorage
      setTravelPoints(newPointList); // Update state
      setTravelPoint(''); // Clear input field
    } else {
      alert('Please enter a valid travel location.');
    }
  };

  // Remove a travel point
  const handleRemovePoint = (index) => {
    const updatedPoints = travelPoints.filter((_, i) => i !== index); // Remove point at specified index
    persistData(updatedPoints); // Save updated list to localStorage
    setTravelPoints(updatedPoints); // Update state
  };

  // Load data from localStorage on component mount
  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localData = localStorage.getItem('travelPoints');
    if (!localData) {
      return;
    }

    localData = JSON.parse(localData).travelPoints || []; // Ensure fallback to an empty array
    setTravelPoints(localData);
  }, []);

  return (
    <div className="set-route-container">
      <h1>Plan Your Travel Route</h1>
      <p>Enter the travel locations you wish to visit and build your itinerary.</p>

      {/* Input field for travel points */}
      <div className="input-section">
        <input
          type="text"
          value={travelPoint}
          onChange={(e) => setTravelPoint(e.target.value)}
          placeholder="Type a travel location..."
          className="travel-input"
        />
        <button onClick={handleAddPoint} className="add-point-btn">
          Add Point
        </button>
      </div>

      {/* Display the list of travel points */}
      {travelPoints.length > 0 && (
        <div className="travel-points-list">
          <h2>Your Travel Points:</h2>
          <ul>
            {travelPoints.map((point, index) => (
              <li key={index} className="travel-point-item">
                <span>
                  <strong>{index + 1}.</strong> {point}
                </span>
                <button onClick={() => handleRemovePoint(index)} className="remove-btn">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display message when no travel points are added */}
      {travelPoints.length === 0 && <p>No travel points added yet. Start planning your route!</p>}
    </div>
  );
};

export default SetRoute;
