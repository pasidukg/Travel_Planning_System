import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <header className="aboutus-header">
                <h1>About Us</h1>
                <p>
                    Welcome to our Travel Planning website. We aim to provide an easy and efficient way for travelers to discover
                    destinations, book hotels, and explore the beautiful regions of Sri Lanka.
                </p>
            </header>

            <section className="aboutus-mission">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to make travel planning as smooth as possible by offering detailed information, booking options,
                    and personalized services. We aim to become your trusted travel partner for all your adventures.
                </p>
            </section>

            <section className="aboutus-chairman">
                <h1>Our Team</h1>
                <div className="chairman-card">
                    <img src='/assets/Chairman1.jpg' alt="Chairman" className="chairman-photo" />
                    <img src='/assets/Chairman2.jpg' alt="Chairman" className="chairman-photo" />
                    <img src='/assets/Chairman3.jpg' alt="Chairman" className="chairman-photo" />
                    <img src='/assets/Chairman4.jpg' alt="Chairman" className="chairman-photo" />
                    
                    <div className="chairman-info">
                        <h3>_</h3>
                        <p>
                            We are the visionary behind our platform, has over 20 years of experience in the travel industry. 
                            Our leadership and dedication have made this platform a trusted name for travelers worldwide.
                        </p>
                    </div>
                </div>
            </section>

            <section className="aboutus-contact">
                <h2>Contact Us</h2>
                <p>
                    If you have any questions or need assistance, feel free to reach out to us at:
                    <br />
                    <strong>Email: support@travelplanning.com</strong>
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
