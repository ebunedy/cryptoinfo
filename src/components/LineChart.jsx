import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChart = ({ coinHistory, currentPrice, coinName, change }) => {
  const cryptoPrice = [];
  const cryptoTimestamp = [];

  for (const { price, timestamp } of coinHistory) {
    const date = new Date(timestamp * 1000).toLocaleDateString();
    cryptoPrice.push(price);
    cryptoTimestamp.push(date);
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: cryptoTimestamp.slice(0, 40),
    datasets: [
      {
        label: "Price In USD",
        data: cryptoPrice.slice(0, 40),
        fill: "false",
        backgroundColor: "#0D0D2B",
        borderColor: "#0D0D2B",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${coinName} Line Chart`,
      },
    },
  };

  return (
    <>
      <div>
        <h1>{coinName} Price Chart</h1>
        <h3>
          Change:{" "}
          <span
            className={`${
              change.toString()[0] === "-"
                ? "text-light-red"
                : "text-light-green"
            } `}
          >
            {change}
          </span>
        </h3>
        Current {coinName} Price: $ {Number(currentPrice).toFixed(2)}
      </div>
      <Line data={data} options={options} height={"80%"} width={"100%"} />
    </>
  );
};

export default LineChart;
