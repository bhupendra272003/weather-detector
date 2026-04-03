import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../features/redux/weatherSlice";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.weather.unit);

  const handleSearch = () => {
    if (!city) return;
    dispatch(fetchWeather({ city, unit }));
    setCity("");
  };

  return (
    <div className="search-container">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-btn">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;