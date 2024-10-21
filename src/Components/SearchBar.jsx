import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setCity, toggle }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      setCity(location.trim());
      setLocation(""); // Clear the input after submission
    }
  };

  return (
    <div className="search-bar">
      <div className="omrs-input-group">
        <form onSubmit={handleSubmit}>
          <label className="omrs-input-underlined">
            <input
              type="text"
              name="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter city name"
              style={{
                background: toggle
                  ? "rgba(73, 133, 224, 0.3)"
                  : "rgba(17, 51, 101, 0.425)",
              }}
            />
            <span className="omrs-input-label">Location</span>
            <button type="submit" style={{ display: 'none' }}>Search</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
