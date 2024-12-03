import React from 'react';
import './ContactUs.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <h2>Hotline: <strong>1912</strong></h2>
      </div>

      {/* Contact Information Cards */}
      <div className="contact-info">
        <div className="contact-card">
          <h3>Sri Lanka Tourism Promotion Bureau</h3>
          <p>+94 11 2426000</p>
          <p>+94 11 2440001</p>
        </div>
        <div className="contact-card">
          <h3>Chairman's Office</h3>
          <p>+94 112 437759</p>
          <p>+94 112 437953</p>
        </div>
        <div className="contact-card">
          <h3>Director General's Office</h3>
          <p>+94 112 629196</p>
          <p>+94 112 629907</p>
        </div>
        <div className="contact-card">
          <h3>Managing Director's Office</h3>
          <p>+94 11 2426000</p>
          <p>mdp@srilanka.travel</p>
        </div>
        <div className="contact-card">
          <h3>Senior Superintendent of Police - Sri Lanka Tourism Police</h3>
          <p>+94 11 242 1052</p>
          <p>+94 11 242 1451</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
