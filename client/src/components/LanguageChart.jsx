import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  );
  
  export default function LanguageChart({ languages }) {
    if (!languages || Object.keys(languages).length === 0) {
      return <p className="text-gray-400 text-center">No language data</p>;
    }
  
    const labels = Object.keys(languages);
    const values = Object.values(languages);
  
    const data = {
      labels,
      datasets: [
        {
          label: "Languages Used",
          data: values,
          backgroundColor: "rgba(59,130,246,0.7)",
          borderRadius: 8,
        },
      ],
    };
  
    const options = {
      plugins: {
        legend: {
          labels: { color: "white" },
        },
      },
      scales: {
        x: {
          ticks: { color: "white" },
        },
        y: {
          ticks: { color: "white" },
        },
      },
    };
  
    return (
      <div className="w-full max-w-md mx-auto">
        <Bar data={data} options={options} />
      </div>
    );
  }