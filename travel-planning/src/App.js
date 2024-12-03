import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import HotelRegister from './components/HotelRegister';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Map from './components/Map';
import Hotels from './components/Hotels';
import SetRoute from './components/SetRoute'; 
import Header from './components/Header'; 
import Footer from './components/Footer'; 

import BookPage from './components/bookhotels/BookPage';

import Sabaragamuwa from './components/provinces/Sabaragamuwa';
import Southern from './components/provinces/Southern';
import Eastern from './components/provinces/Eastern';
import Western from './components/provinces/Western';
import Northern from './components/provinces/Northern';

import AdamsPeak from "./components/nearhotels/AdamsPeak";
import BelihulOya from "./components/nearhotels/BelihulOya";
import SinharajaForest from "./components/nearhotels/SinharajaForest";
import Galle from './components/nearhotels/Galle';
import Mirissa from './components/nearhotels/Mirissa';
import Colombo from './components/nearhotels/Colombo';
import Trincomalee from './components/nearhotels/Trincomalee';
import Jaffna from './components/nearhotels/Jaffna';

import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Add Header component */}
        <Header />

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hotel-register" element={<HotelRegister />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/map" element={<Map />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/set-route" element={<SetRoute />} /> 
          
          <Route path="/sabaragamuwa" element={<Sabaragamuwa />} />
          <Route path="/southern" element={<Southern />} />
          <Route path="/eastern" element={<Eastern />} />
          <Route path="/western" element={<Western />} />
          <Route path="/northern" element={<Northern />} />

          <Route path="/adams-peak" element={<AdamsPeak />} />
          <Route path="/belihul-oya" element={<BelihulOya />} />
          <Route path="/sinharaja" element={<SinharajaForest />} />
          <Route path="/galle" element={<Galle />} />
          <Route path="/mirissa" element={<Mirissa />} />
          <Route path="/trincomalee" element={<Trincomalee />} />
          <Route path="/colombo" element={<Colombo />} />
          <Route path="/jaffna" element={<Jaffna />} />


          {/* Add SetRoute route */}
        </Routes>

        {/* Add Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
