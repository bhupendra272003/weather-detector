import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const TemperatureChart = () => {
  const forecast = useSelector((state) => state.weather.forecast);
  if (!forecast) return null;

  const hourly = forecast.list.slice(0, 8);

  const data = {
    labels: hourly.map((i) =>
      new Date(i.dt * 1000).getHours() + ":00"
    ),
    datasets: [
      {
        label: "Temperature",
        data: hourly.map((i) => i.main.temp),
        fill: true,
        tension: 0.4,
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56,189,248,0.2)",
        pointBackgroundColor: "#fff",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
      },
      y: {
        ticks: { color: "#fff" },
      },
    },
  };

  return (
    <motion.div
      className="card chart-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3>Hourly Temperature</h3>
      <Line data={data} options={options} />
    </motion.div>
  );
};

export default TemperatureChart;