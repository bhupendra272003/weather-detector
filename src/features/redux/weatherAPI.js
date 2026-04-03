export const fetchPastWeatherAPI = (lat, lon, dt) =>
  axios.get(
    `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=${API_KEY}&units=metric`
  );