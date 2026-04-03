import { useSelector } from "react-redux";

const WeatherCard = () => {
  const { data } = useSelector((state) => state.weather);

  if (!data) return null;

  return (
    <div className="card">
      <h2>{data.name}</h2>
      <h1>{Math.round(data.main.temp)}°</h1>
      <p>{data.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;