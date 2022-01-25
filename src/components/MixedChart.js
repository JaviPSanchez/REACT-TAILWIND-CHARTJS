import React from "react";
import { Bar } from "react-chartjs-2";

//Example of 3 different data sets
const data1 = [12, 19, 8, 5, 3];
const data2 = [13, 20, 9, 6, 4];
const total = data1.map((num, idx) => num + data2[idx]);

const data = {
  labels: ["work", "finance", "social", "leisure", "health"],
  datasets: [
    {
      label: "Dataset 1",
      data: data1,
      type: "bar",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
      barThickness: 12,
      order: 1,
    },
    {
      label: "Dataset 2",
      data: data2,

      fill: false,
      borderColor: "rgb(54, 162, 235)",
      barThickness: 12,
    },
    {
      label: "Total",
      data: total,
      type: "line",
      backgroundColor: "rgba(234, 87, 102, 0.6)",
      borderColor: "rgba(234, 87, 102, 0.6)",
      fill: false,
      pointHoverRadius: 20,
      pointHoverBorderWidth: 5,
      order: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    duration: 3000,
    easing: "easeInBounce",
  },
  title: {
    display: true,
    text: "Bar + Line Chart",
    fontSize: 25,
  },
  legend: {
    labels: {
      fontSize: 25,
    },
  },
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Options",
        },
        stacked: "true",
      },
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Values",
        },
        stacked: "true",
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function MixedChart() {
  //Return some jsx
  return (
    <div>
      <h1>Bar Chart</h1>
      <Bar data={data} options={options} />
    </div>
  );
}

export default MixedChart;
