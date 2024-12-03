import React from 'react';
import './Footer.css'; // Import the CSS for the footer

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-left">
                    <h1> Sri Lanka </h1>

                    <p>Tourism Hotline: 1912</p>
                    <p>Ambulance Service: 1990</p>
                    <div className="social-media">
                        <a href="#">Facebook</a>
                        <a href="#">YouTube</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="quick-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Subscribe</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Complaints</a></li>
                        </ul>
                    </div>

                    <div className="other-sites">
                        <h2>Other Sites</h2>
                        <ul>
                            <li><a href="#">Sri Lanka Tourism Development Authority</a></li>
                            <li><a href="#">Sri Lanka Tourism Convention Bureau</a></li>
                            <li><a href="#">Sri Lanka Institute of Tourism & Hotel Management</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>2024 All Rights Reserved by Sri Lanka Tourism Promotion Bureau.</p>
            </div>
        </div>
    );
};

export default Footer;
