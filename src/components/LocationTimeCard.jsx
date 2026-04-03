import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function LocationTimeCard() {
  const { data } = useSelector((state) => state.weather);
  const [time,setTime]=useState(null);

  useEffect(()=>{
    if(!data) return;

    const update=()=>{
      const utc = new Date().getTime() + new Date().getTimezoneOffset()*60000;
      const cityTime = new Date(utc + data.timezone*1000);
      setTime(cityTime);
    };

    update();
    const interval=setInterval(update,1000);
    return ()=>clearInterval(interval);
  },[data]);

  if(!time) return null;

  return(
    <div className="card">
      <h3>{data.name} Time</h3>
      <p>{time.toLocaleDateString()}</p>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default LocationTimeCard;