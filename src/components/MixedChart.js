import React from "react";
import { Bar } from "react-chartjs-2";
import data from "./data/data.json";

const ponderationWork = [];
const valueChoiceWork = [];

for (let i = 0; i < 5; i++) {
  const data1 = data.work[i].ponderation;
  ponderationWork.push(data1);
}
console.log(ponderationWork); //[3, 6, 4, 3, 8]

for (let i = 0; i < 5; i++) {
  const data1 = data.work[i].valeurChoix;
  valueChoiceWork.push(data1);
}
console.log(valueChoiceWork); //[0, 1, 1, 0, 1]

const mpWork = ponderationWork.map(function (num, idx) {
  return num * valueChoiceWork[idx];
});
console.log(mpWork); // [0, 6, 4, 0, 8]

const totalWork = ponderationWork.reduce(
  (partialSum, idx) => partialSum + idx,
  0
);
console.log(totalWork); // 24

const work = 18 / totalWork;
console.log(work); //0.75

const data2 = [13, 20, 9, 6, 4];
const total = ponderationWork.map((num, idx) => num + data2[idx]);

// console.log(total);

const data_exemple = {
  labels: Object.keys(data), //['work', 'finance', 'social', 'leisure', 'health']
  datasets: [
    {
      label: "Dataset 1",
      data: ponderationWork,
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
    // {
    //   label: "Dataset 2",
    //   data: data2,

    //   fill: false,
    //   borderColor: "rgb(54, 162, 235)",
    //   barThickness: 12,
    // },
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
    text: "Features",
    fontSize: 25,
  },
  legend: {
    display: false,
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
        // stacked: "true",
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
      <Bar data={data_exemple} options={options} />
    </div>
  );
}

export default MixedChart;
