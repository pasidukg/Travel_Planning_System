import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hotels.css";

const Hotels = () => {
  const navigate = useNavigate();

  const provinces = [
    {
      name: "Central Province",
      hotels: [
        { id: 1, name: "Hill Country Escape", village: "Nuwara Eliya", stars: 4, image: "/assets/hotel1.jpg" },
        { id: 2, name: "Tea Valley Retreat", village: "Kandy", stars: 5, image: "/assets/hotel7.jpg" },
        { id: 3, name: "Sigiriya Heritage", village: "Sigiriya", stars: 3, image: "/assets/hotel2.jpg" },
        { id: 4, name: "Ella Serenity", village: "Ella", stars: 4, image: "/assets/hotel9.jpg" },
        { id: 5, name: "Pinnawala Comfort", village: "Pinnawala", stars: 3, image: "/assets/hotel5.jpg" },
        { id: 6, name: "Nuwara Grand Stay", village: "Nuwara Eliya", stars: 5, image: "/assets/hotel3.jpg" },
        { id: 7, name: "Ramboda Falls Haven", village: "Ramboda", stars: 4, image: "/assets/hotel8.jpg" },
        { id: 8, name: "Kandy Hilltop", village: "Kandy", stars: 4, image: "/assets/hotel10.jpg" },
        { id: 9, name: "Adam's Peak Retreat", village: "Hatton", stars: 4, image: "/assets/hotel6.jpg" },
        { id: 10, name: "Ella Green Resort", village: "Ella", stars: 5, image: "/assets/hotel4.jpg" },
      ],
    },
    {
      name: "Sabaragamuwa",
      hotels: [
        { id: 11, name: "Belihul Oya Escape", village: "Balangoda", stars: 4, image: "/assets/hotel3.jpg" },
        { id: 12, name: "River Edge Lodge", village: "Ratnapura", stars: 5, image: "/assets/hotel1.jpg" },
        { id: 13, name: "Samanala Hills", village: "Balangoda", stars: 3, image: "/assets/hotel7.jpg" },
        { id: 14, name: "Kegalle Paradise", village: "Kegalle", stars: 4, image: "/assets/hotel8.jpg" },
        { id: 15, name: "Dolevila Hotel", village: "Dolevila", stars: 3, image: "/assets/hotel6.jpg" },
        { id: 16, name: "Ruhunu Eco Stay", village: "Ratnapura", stars: 4, image: "/assets/hotel9.jpg" },
        { id: 17, name: "Bopath Ella Resort", village: "Ratnapura", stars: 5, image: "/assets/hotel5.jpg" },
        { id: 18, name: "Misty Mountain View", village: "Hatton", stars: 4, image: "/assets/hotel4.jpg" },
        { id: 19, name: "Ruwanwella Resort", village: "Ruwanwella", stars: 3, image: "/assets/hotel2.jpg" },
        { id: 20, name: "Hatton's Retreat", village: "Hatton", stars: 5, image: "/assets/hotel10.jpg" },
      ],
    },
    {
      name: "North Western",
      hotels: [
        { id: 21, name: "Coconut Grove Stay", village: "Chilaw", stars: 4, image: "/assets/hotel6.jpg" },
        { id: 22, name: "Wilpattu Safari", village: "Wilpattu", stars: 5, image: "/assets/hotel4.jpg" },
        { id: 23, name: "Kurunegala Inn", village: "Kurunegala", stars: 4, image: "/assets/hotel7.jpg" },
        { id: 24, name: "Negombo Lagoon", village: "Negombo", stars: 3, image: "/assets/hotel1.jpg" },
        { id: 25, name: "Puttalam Sea Breeze", village: "Puttalam", stars: 3, image: "/assets/hotel9.jpg" },
        { id: 26, name: "Minneriya Jungle Stay", village: "Minneriya", stars: 4, image: "/assets/hotel2.jpg" },
        { id: 27, name: "Dambulla Comfort", village: "Dambulla", stars: 3, image: "/assets/hotel10.jpg" },
        { id: 28, name: "Polonnaruwa Lakeside", village: "Polonnaruwa", stars: 5, image: "/assets/hotel3.jpg" },
        { id: 29, name: "Kegalle Villa", village: "Kegalle", stars: 4, image: "/assets/hotel8.jpg" },
        { id: 30, name: "Anuradhapura Heritage", village: "Anuradhapura", stars: 5, image: "/assets/hotel5.jpg" },
      ],
    },
    {
      name: "Southern",
      hotels: [
        { id: 31, name: "Galle Fort Resort", village: "Galle", stars: 4, image: "/assets/hotel5.jpg" },
        { id: 32, name: "Mirissa Beachfront", village: "Mirissa", stars: 5, image: "/assets/hotel2.jpg" },
        { id: 33, name: "Tangalle Bay Stay", village: "Tangalle", stars: 4, image: "/assets/hotel8.jpg" },
        { id: 34, name: "Matara Breeze", village: "Matara", stars: 3, image: "/assets/hotel1.jpg" },
        { id: 35, name: "Unawatuna Villas", village: "Unawatuna", stars: 4, image: "/assets/hotel10.jpg" },
        { id: 36, name: "Hikkaduwa Beach Haven", village: "Hikkaduwa", stars: 4, image: "/assets/hotel6.jpg" },
        { id: 37, name: "Weligama Dream", village: "Weligama", stars: 5, image: "/assets/hotel3.jpg" },
        { id: 38, name: "Bentota Paradise", village: "Bentota", stars: 4, image: "/assets/hotel7.jpg" },
        { id: 39, name: "Koggala Retreat", village: "Koggala", stars: 3, image: "/assets/hotel4.jpg" },
        { id: 40, name: "Madu River Lodge", village: "Madu River", stars: 5, image: "/assets/hotel9.jpg" },
      ],
    },
      {
        name: "Eastern",
        hotels: [
          { id: 41, name: "Trincomalee Bay Resort", village: "Trincomalee", stars: 4, image: "/assets/hotel4.jpg" },
          { id: 42, name: "Pasikudah Beach Paradise", village: "Pasikudah", stars: 5, image: "/assets/hotel1.jpg" },
          { id: 43, name: "Arugam Bay Surf Lodge", village: "Arugam Bay", stars: 3, image: "/assets/hotel8.jpg" },
          { id: 44, name: "Batticaloa Lagoon Villa", village: "Batticaloa", stars: 4, image: "/assets/hotel7.jpg" },
          { id: 45, name: "Nilaveli Blue Waters", village: "Nilaveli", stars: 5, image: "/assets/hotel5.jpg" },
          { id: 46, name: "Kalpitiya Beach Retreat", village: "Kalpitiya", stars: 4, image: "/assets/hotel6.jpg" },
          { id: 47, name: "Kalkudah Sands", village: "Kalkudah", stars: 3, image: "/assets/hotel9.jpg" },
          { id: 48, name: "Pigeon Island Resort", village: "Nilaveli", stars: 4, image: "/assets/hotel2.jpg" },
          { id: 49, name: "Trincomalee Lagoon Resort", village: "Trincomalee", stars: 5, image: "/assets/hotel3.jpg" },
          { id: 50, name: "Koneswaram Temple Retreat", village: "Trincomalee", stars: 3, image: "/assets/hotel10.jpg" },
        ]
      },
      // Western Province
      {
        name: "Western",
        hotels: [
          { id: 51, name: "Colombo Marina Resort", village: "Colombo", stars: 5, image: "/assets/hotel2.jpg" },
          { id: 52, name: "Mount Lavinia Hotel", village: "Mount Lavinia", stars: 4, image: "/assets/hotel9.jpg" },
          { id: 53, name: "Negombo Beach Resort", village: "Negombo", stars: 4, image: "/assets/hotel8.jpg" },
          { id: 54, name: "Bentota Beach Paradise", village: "Bentota", stars: 3, image: "/assets/hotel1.jpg" },
          { id: 55, name: "Colombo Grand Hotel", village: "Colombo", stars: 4, image: "/assets/hotel7.jpg" },
          { id: 56, name: "Kalutara Beach Resort", village: "Kalutara", stars: 3, image: "/assets/hotel4.jpg" },
          { id: 57, name: "Sri Lanka Beach Hotel", village: "Mount Lavinia", stars: 5, image: "/assets/hotel10.jpg" },
          { id: 58, name: "Waskaduwa Beach Retreat", village: "Waskaduwa", stars: 4, image: "/assets/hotel5.jpg" },
          { id: 59, name: "Panadura Beach Hotel", village: "Panadura", stars: 3, image: "/assets/hotel6.jpg" },
          { id: 60, name: "Moratuwa Beach Resort", village: "Moratuwa", stars: 4, image: "/assets/hotel3.jpg" },
        ]
      },
      // North Central Province
      {
        name: "North Central",
        hotels: [
          { id: 61, name: "Anuradhapura Heritage Hotel", village: "Anuradhapura", stars: 4, image: "/assets/hotel6.jpg" },
          { id: 62, name: "Polonnaruwa Lagoon Resort", village: "Polonnaruwa", stars: 5, image: "/assets/hotel7.jpg" },
          { id: 63, name: "Minneriya Safari Lodge", village: "Minneriya", stars: 4, image: "/assets/hotel4.jpg" },
          { id: 64, name: "Dambulla Cave Hotel", village: "Dambulla", stars: 3, image: "/assets/hotel1.jpg" },
          { id: 65, name: "Sigiriya Village Resort", village: "Sigiriya", stars: 4, image: "/assets/hotel3.jpg" },
          { id: 66, name: "Kurunegala Comfort Inn", village: "Kurunegala", stars: 4, image: "/assets/hotel2.jpg" },
          { id: 67, name: "Wilpattu Wildlife Resort", village: "Wilpattu", stars: 5, image: "/assets/hotel8.jpg" },
          { id: 68, name: "Anuradhapura Grand Hotel", village: "Anuradhapura", stars: 4, image: "/assets/hotel9.jpg" },
          { id: 69, name: "Minneriya Wildlife Lodge", village: "Minneriya", stars: 3, image: "/assets/hotel10.jpg" },
          { id: 70, name: "Puttalam Resort", village: "Puttalam", stars: 3, image: "/assets/hotel5.jpg" },
        ]
      },
      // Northern Province
      {
        name: "Northern",
        hotels: [
          { id: 71, name: "Jaffna Heritage Hotel", village: "Jaffna", stars: 4, image: "/assets/hotel1.jpg" },
          { id: 72, name: "Mannar Lagoon Resort", village: "Mannar", stars: 3, image: "/assets/hotel2.jpg" },
          { id: 73, name: "Kilinochchi Resort", village: "Kilinochchi", stars: 3, image: "/assets/hotel6.jpg" },
          { id: 74, name: "Nelliadi Beach Resort", village: "Nelliadi", stars: 4, image: "/assets/hotel4.jpg" },
          { id: 75, name: "Vavuniya Safari Lodge", village: "Vavuniya", stars: 4, image: "/assets/hotel8.jpg" },
          { id: 76, name: "Point Pedro Rest House", village: "Point Pedro", stars: 3, image: "/assets/hotel7.jpg" },
          { id: 77, name: "Kankesanturai Resort", village: "Kankesanturai", stars: 4, image: "/assets/hotel10.jpg" },
          { id: 78, name: "Chundikkulam Beach Resort", village: "Chundikkulam", stars: 4, image: "/assets/hotel5.jpg" },
          { id: 79, name: "Jaffna Sea View Hotel", village: "Jaffna", stars: 3, image: "/assets/hotel9.jpg" },
          { id: 80, name: "Mullaitivu Beach Resort", village: "Mullaitivu", stars: 3, image: "/assets/hotel3.jpg" },
        ]
      },
      // Uva Province
      {
        name: "Uva",
        hotels: [
          { id: 81, name: "Badulla Eco Lodge", village: "Badulla", stars: 4, image: "/assets/hotel9.jpg" },
          { id: 82, name: "Haputale Hill Resort", village: "Haputale", stars: 5, image: "/assets/hotel1.jpg" },
          { id: 83, name: "Woolahera Retreat", village: "Woolahera", stars: 4, image: "/assets/hotel2.jpg" },
          { id: 84, name: "Sella Kataragama Resort", village: "Kataragama", stars: 5, image: "/assets/hotel6.jpg" },
          { id: 85, name: "Tissamaharama Safari Lodge", village: "Tissamaharama", stars: 4, image: "/assets/hotel3.jpg" },
          { id: 86, name: "Kirinda Beach Resort", village: "Kirinda", stars: 3, image: "/assets/hotel5.jpg" },
          { id: 87, name: "Kataragama Village Resort", village: "Kataragama", stars: 3, image: "/assets/hotel7.jpg" },
          { id: 88, name: "Ella Jungle Resort", village: "Ella", stars: 5, image: "/assets/hotel4.jpg" },
          { id: 89, name: "Ruhuna Paradise Hotel", village: "Tissamaharama", stars: 3, image: "/assets/hotel8.jpg" },
          { id: 90, name: "Uva Safari Lodge", village: "Monaragala", stars: 4, image: "/assets/hotel8.jpg" },
    
        ]
      }
    ];
  

  
  

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvince, setSelectedProvince] = useState(null);

  const allHotels = provinces.flatMap((province) => province.hotels);

  const filteredHotels = allHotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleHotelClick = (hotel) => {
    navigate("/book", { state: { hotel } });
  };

  return (
    <div className="hotels-page-container">
      <header className="hotels-header">
        <h1>Explore Hotels by Province</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search hotels by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
          {searchQuery && (
            <ul className="search-dropdown">
              {filteredHotels.length > 0 ? (
                filteredHotels.map((hotel) => (
                  <li
                    key={hotel.id}
                    onClick={() => handleHotelClick(hotel)}
                    className="dropdown-item"
                  >
                    {hotel.name}
                  </li>
                ))
              ) : (
                <li className="dropdown-item no-results">No hotels found</li>
              )}
            </ul>
          )}
        </div>
      </header>

      {/* Province List */}
      <div className="province-list">
        {provinces.map((province, index) => (
          <div
            key={index}
            className={`province-item ${
              selectedProvince?.name === province.name ? "active" : ""
            }`}
            onClick={() => setSelectedProvince(province)}
          >
            {province.name}
          </div>
        ))}
      </div>

      {/* Hotels List */}
      <div className="hotels-list">
        {selectedProvince ? (
          selectedProvince.hotels.length > 0 ? (
            selectedProvince.hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="hotel-card"
                onClick={() => handleHotelClick(hotel)}
              >
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                <h2 className="hotel-name">{hotel.name}</h2>
                <p className="hotel-village">{hotel.village}</p>
                <p className="hotel-stars">
                  {"★".repeat(hotel.stars)}
                  {"☆".repeat(5 - hotel.stars)}
                </p>
              </div>
            ))
          ) : (
            <p className="no-results">No hotels found in this province.</p>
          )
        ) : (
          <p className="select-province">Please select a province to view hotels.</p>
        )}
      </div>
    </div>
  );
};

export default Hotels;
