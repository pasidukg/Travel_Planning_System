import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HotelRegister.css';

const HotelRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        hotelName: '',
        email: '',
        contactNumber: '',
        location: '',
        description: '',
    });

    const [successMessage, setSuccessMessage] = useState(''); // State to hold the success message

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form validation logic here
        
        // Simulate saving to database (API call can be added here)
        console.log('Hotel Registered:', formData);
        
        // Set the success message
        setSuccessMessage('Hotel successfully registered!');

        // Optionally, clear the form
        setFormData({
            hotelName: '',
            email: '',
            contactNumber: '',
            location: '',
            description: '',
        });

        // Navigate to the Welcome page if required after a delay
        // setTimeout(() => navigate('/welcome'), 2000); // Uncomment if you want automatic redirection
    };

    return (
        <div className="hotel-register-container">
            <div className="hotel-register-left">
                <img src="assets/background.jpg" alt="Background" />
            </div>
            <div className="hotel-register-right">
                <div className="hotel-register-box">
                    <div className="logo1">
                        <img src="assets/logo.png" alt="Travel Sri Lanka" style={{ width: '200px', height: 'auto' }} />
                    </div>
                    <h2>Hotel Registration</h2>
                    
                    {/* Show success message if it exists */}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="hotelName">Hotel Name</label>
                            <input
                                type="text"
                                id="hotelName"
                                name="hotelName"
                                placeholder="Enter Hotel Name"
                                value={formData.hotelName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="contactNumber">Contact Number</label>
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                placeholder="Enter Contact Number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Enter Hotel Location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Enter Hotel Description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-register-hotel">
                            Register Hotel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HotelRegister;
