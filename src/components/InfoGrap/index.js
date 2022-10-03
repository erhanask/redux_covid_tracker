import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["Infected", "Recovered", "Death", "Active"];

export const data = {
  labels,
  datasets: [
    {
      label: "InfectedData",
      data: [3],
      backgroundColor: "#42a5f5",
    },
    {
      label: "RecoveredData",
      data: [0, 2],
      backgroundColor: "#4caf50",
    },
    {
      label: "DeathData",
      data: [0, 0, 5],
      backgroundColor: "#ef5350",
    },
    {
      label: "ActiveData",
      data: [0, 0, 0, 8],
      backgroundColor: "#ff9800",
    },
  ],
};

export const InfoGrap = () => {
  return (
    <>
      <Bar
        style={{
          background:
            "linear-gradient(90deg, rgb(143 205 255) 15%, rgb(154 199 156) 40%, rgb(211 185 184) 67%, rgb(249 213 161) 90%)",
            borderRadius: '20px'
        }}
        options={options}
        data={data}
      />
    </>
  );
};
