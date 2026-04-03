import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function RadarChart({ scores }) {
  if (!scores) return null;

  const data = {
    labels: [
      "Activity",
      "Diversity",
      "Community",
      "Code Quality",
      "Hiring",
    ],
    datasets: [
      {
        label: "Score",
        data: [
          scores.activity || 0,
          scores.diversity || 0,
          scores.community || 0,
          scores.codeQuality || 0,
          scores.hiringReady || 0,
        ],
        backgroundColor: "rgba(59,130,246,0.2)",
        borderColor: "rgb(59,130,246)",
      },
    ],
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <Radar data={data} />
    </div>
  );
}