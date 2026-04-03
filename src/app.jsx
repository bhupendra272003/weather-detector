import "./App.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import TemperatureChart from "./components/TemperatureChart";
import ForecastCard from "./components/ForecastCard";
import Toggle from "./components/Toggle";
import LocationTimeCard from "./components/LocationTimeCard";
import DateTimeCard from "./components/DateTimeCard";
import useGeolocation from "./hooks/useGeolocation";
import WeatherMap from "./components/WeatherMap";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  useGeolocation();

  const { loading, error, data } = useSelector(
    (state) => state.weather
  );

  return (
    <div className="app">
      {/* Top Bar */}
      <div className="top-bar">
        <SearchBar />
        <Toggle />
      </div>

      {/* Loading / Error */}
      {loading && <p className="loading">Fetching Weather...</p>}
     

      {/* Main Horizontal Section */}
      <motion.div
        className="horizontal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      ><DateTimeCard/>
        <WeatherCard /><LocationTimeCard/>
        
      </motion.div>   <motion.div
        className="horizontal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <TemperatureChart />
      </motion.div>

      {/* Wide Forecast Section */}
      {data && (
        <motion.div
          className="forecast-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ForecastCard />
        </motion.div>
      
      )}
        {data && (
        <motion.div
          className="forecast-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <WeatherMap/>

          
        </motion.div>
      
      )}
              {/* ⏱ Hourly Forecast (Horizontal) */}
      <div className="hourly-section">
        <h2 className="section-title">Hourly Forecast</h2>
        <HourlyForecast />
      </div>
      
    </div>
  );
}

export default App;