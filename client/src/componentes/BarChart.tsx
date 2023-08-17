import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  BarElement,
  Title,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { StasticsType } from "../types/SongType";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  BarElement,
  Title,
  LinearScale
);

function BarChart({ stastics }: { stastics: StasticsType }) {
  return (
    <Bar
      data={{
        labels: ["Artists", "Albums", "Songs", "Genre"],
        datasets: [
          {
            label: "Song Stastics",
            data: [
              stastics.totalNumberOfArtists,
              stastics.totalNumberOfAlbums,
              stastics.totalNumberOfSongs,
              stastics.totalNumberOfGenre,
            ],
            backgroundColor: ["#20d8bf", "#2c89c7", "#0ce49c", "#cacaca"],
          },
        ],
      }}
    />
  );
}

export default BarChart;
