import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ onCategorySelect }) => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Sample data for regions and cities
  const regions = {
    'North America': ['New York', 'Los Angeles', 'Chicago', 'Toronto', 'Vancouver', 'Miami', 'Houston', 'Boston', 'Seattle', 'San Francisco'],
    'Europe': ['London', 'Berlin', 'Paris', 'Madrid', 'Rome', 'Amsterdam', 'Brussels', 'Vienna', 'Lisbon', 'Zurich'],
    'Asia': ['Tokyo', 'Shanghai', 'Mumbai', 'Singapore', 'Bangkok', 'Kuala Lumpur', 'Seoul', 'Hong Kong', 'Delhi', 'Istanbul'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Hobart', 'Darwin', 'Newcastle'],
    'Africa': ['Cairo', 'Lagos', 'Nairobi', 'Johannesburg', 'Cape Town', 'Accra', 'Kampala', 'Addis Ababa', 'Casablanca', 'Durban'],
    'South America': ['Buenos Aires', 'São Paulo', 'Rio de Janeiro', 'Lima', 'Bogotá', 'Santiago', 'Caracas', 'Quito', 'Montevideo', 'La Paz'],
    'Middle East': ['Dubai', 'Tel Aviv', 'Doha', 'Abu Dhabi', 'Riyadh', 'Istanbul', 'Beirut', 'Kuwait City', 'Muscat', 'Tehran'],
    'Central America': ['Mexico City', 'Guatemala City', 'San Salvador', 'Tegucigalpa', 'Managua', 'Panama City', 'Havana', 'Port-au-Prince', 'Kingston', 'Belmopan'],
    'Caribbean': ['San Juan', 'Nassau', 'Havana', 'Bridgetown', 'Port-of-Spain', 'Santo Domingo', 'Kingston', 'St. John’s', 'Oranjestad', 'Castries'],
    'Eastern Europe': ['Warsaw', 'Prague', 'Budapest', 'Bucharest', 'Kiev', 'Sofia', 'Tallinn', 'Riga', 'Vilnius', 'Minsk'],
  };

  // State for modal open/close
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleLocation = () => {
    setIsLocationOpen(!isLocationOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setSelectedCity(''); // Reset city when region changes
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  // Popup open and close functions
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <aside className="sidepanel">
      {/* New Job Button */}
      <button className="new_job_btn" onClick={openPopup}>+ New Job</button>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popup" onClick={closePopup}>
          <div className="popup_content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closePopup}>&times;</span>
            <div className="popup_body">
              <div className="job_selection freelance">
                <h3>Hire a Freelancer</h3>
                <ul>
                  <li>Get proposals from creators matching your needs</li>
                  <li>Discuss, share files & schedule video calls</li>
                  <li>Pay seamlessly and securely with a credit card</li>
                </ul>
                <button>Find a Freelancer Today</button>
              </div>

              <div className="job_selection full-time">
                <h3>Post a Full-Time Job</h3>
                <ul>
                  <li>Share your job opportunity with millions of designers</li>
                  <li>Redirect applications to your favorite external tool</li>
                  <li>Job posts are free and expire after 30 days</li>
                </ul>
                <button>Post a Full-Time Job</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Categories Section */}
      <div className="categories">
        <h3>Categories</h3>
        <div className="category_option">
          <input 
            type="radio" 
            id="all" 
            name="category" 
            checked={selectedCategory === 'All'}
            onChange={() => handleCategoryChange('All')}
          />
          <label htmlFor="all">All</label>
        </div>

        <h4 className="popular">Popular</h4>

        {[
          "Logo Design", "Branding Services", "Social Media Design", 
          "Website Design", "Illustrations", "Packaging Design", 
          "Landing Page Design", "UI/UX Design", 
          "Architecture & Interior Design"
        ].map((category, index) => (
          <div className="category_option" key={index}>
            <input 
              type="radio" 
              id={category} 
              name="category" 
              checked={selectedCategory === category}
              onChange={() => handleCategoryChange(category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}

        <a href="#" className="view_all">View All Categories</a>
      </div>

      {/* Location Section */}
      <div className="location">
        <div className="location_header" onClick={toggleLocation}>
          <span>Location</span>
          <span className={`arrow ${isLocationOpen ? 'open' : 'closed'}`}>+</span>
        </div>
        {isLocationOpen && (
          <div className="location_content">
            <h4>Select Region</h4>
            <select 
              className="region_dropdown"
              value={selectedRegion} 
              onChange={(e) => handleRegionChange(e.target.value)}
            >
              <option value="">-- Select Region --</option>
              {Object.keys(regions).map((region, index) => (
                <option key={index} value={region}>{region}</option>
              ))}
            </select>

            {selectedRegion && (
              <>
                <h4>Select City</h4>
                <select 
                  className="city_dropdown"
                  value={selectedCity} 
                  onChange={(e) => handleCityChange(e.target.value)}
                >
                  <option value="">-- Select City --</option>
                  {regions[selectedRegion].map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
