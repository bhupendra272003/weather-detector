import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../features/redux/weatherSlice";

const Toggle = () => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.weather.unit);

  return (
    <div className="toggle-container" onClick={() => dispatch(toggleUnit())}>
      <div className={`toggle-circle ${unit === "imperial" ? "move" : ""}`}>
        {unit === "metric" ? "°C" : "°F"}
      </div>
    </div>
  );
};

export default Toggle;