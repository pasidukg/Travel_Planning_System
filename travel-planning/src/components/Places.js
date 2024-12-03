import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Places.css';

const Places = () => {
    const [provinces, setProvinces] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/provinces')
            .then(response => setProvinces(response.data))
            .catch(error => console.error('Error fetching provinces:', error));
    }, []);

    return (
        <div className="places-container">
            <h1>Provinces</h1>
            <ul>
                {provinces.map((province, index) => (
                    <li key={index}>{province}</li>
                ))}
            </ul>
        </div>
    );
};

export default Places;
