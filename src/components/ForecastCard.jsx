import { useSelector } from "react-redux";
import { getDailyForecast } from "../utilis/helpers";

const ForecastCard = () => {
  const forecast = useSelector((state) => state.weather.forecast);

  if (!forecast) return null;

  const daily = getDailyForecast(forecast.list);

  return (
    <div className="card">
      <h2>5-Day Forecast</h2>

      <div className="forecast-row">
        {daily.map((item, i) => (
          <div key={i}>
            <p>
              {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            />

            <p>{Math.round(item.main.temp)}°</p>
            <p>🌧 {Math.round(item.pop * 100)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;