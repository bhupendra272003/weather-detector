import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../features/redux/weatherSlice";

const useGeolocation = () => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.weather.unit);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${unit}&appid=YOUR_API_KEY`
        );
        const data = await res.json();
        dispatch(fetchWeather({ city: data.name, unit }));
      },
      () => {}
    );
  }, [dispatch, unit]);
};

export default useGeolocation;