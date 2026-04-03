import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const HourlyForecast = () => {
  const forecast = useSelector((state) => state.weather.forecast);
  const scrollRef = useRef(null);
  let isPaused = false;

  useEffect(() => {
    const container = scrollRef.current;

    const scroll = () => {
      if (!container || isPaused) return;

      container.scrollLeft += 0.5;

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 20);

    // Pause on hover / touch
    const pause = () => (isPaused = true);
    const resume = () => (isPaused = false);

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("touchstart", pause);
    container.addEventListener("touchend", resume);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", resume);
    };
  }, []);

  if (!forecast) return null;

  const hourly = forecast.list.slice(0, 8);

  return (
    <div className="hourly-container" ref={scrollRef}>
      {hourly.map((item, i) => (
        <div key={i} className="hourly-card">
          <p className="hourly-time">
            {new Date(item.dt * 1000).getHours()}:00
          </p>

          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt=""
          />

          <p className="hourly-temp">
            {Math.round(item.main.temp)}°
          </p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;