import axios from "axios";

const API_KEY = "62b780f0d7f7a772c5ecb8c72899c979";

export const fetchWeatherAPI = async (city, unit) => {
  const weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
  );

  const forecast = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
  );

  return {
    weather: weather.data,
    forecast: forecast.data,
  };
};