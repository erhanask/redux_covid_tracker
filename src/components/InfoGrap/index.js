import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovidDatas } from "../../redux/InfoSlice";

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
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};


const labels = ["Infected", "Recovered", "Death"];


export const InfoGrap = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.info.status);
  const informations = useSelector(state => state.info.informations);

  useEffect(() => {
      if (status === 'idle')
          dispatch(fetchCovidDatas({country: 'turkey'}))
  },[dispatch,status])


  const data = {
    labels,
    datasets: [
      {
        label: "Infected",
        data: [status === 'succeeded' ? informations.confirmed.value : '0'],
        backgroundColor: "#42a5f5",
      },
      {
        label: "Recovered",
        data: [0, status === 'succeeded' ? informations.recovered.value : '0'],
        backgroundColor: "#4caf50",
      },
      {
        label: "Death",
        data: [0, 0, status === 'succeeded' ? informations.deaths.value : '0'],
        backgroundColor: "#ef5350",
      },
    ],
  };

  return (
    <>
      <Bar
        style={{
          background:
            "linear-gradient(90deg, rgb(143 205 255) 15%, rgb(154 199 156) 40%, rgb(211 185 184) 67%, rgb(249 213 161) 90%)",
            borderRadius: '20px',
            padding: '20px'
        }}
        options={options}
        data={data}
      />
    </>
  );
};
