import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function WeatherMap() {
  const { data } = useSelector((state) => state.weather);

  if (!data) return null;

  const lat = data.coord?.lat;
  const lon = data.coord?.lon;

  return (
    <div className="card">
      <h3>Location Map</h3>

      <MapContainer
        key={`${lat}-${lon}`}  // important for re-render
        center={[lat, lon]}
        zoom={10}
        style={{ height: "300px", width: "100%", borderRadius: "15px" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
          <Popup>{data.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default WeatherMap;