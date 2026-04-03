import { useSelector } from "react-redux";

const PastForecast = () => {
  const past = useSelector((state) => state.weather.past);

  if (!past) return null;

  return (
    <div className="card">
      <h2>Past Weather</h2>

      <div className="forecast-row">
        {past.data?.map((item, i) => (
          <div key={i}>
            <p>
              {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <p>{Math.round(item.temp)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastForecast;