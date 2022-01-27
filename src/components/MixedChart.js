import React from "react";
import { Bar } from "react-chartjs-2";
import data from "./data/data.json";

class Feature {
  constructor(data) {
    this.data = data;
    this.ponderation = this.extractPonderationValue();
    this.valueChoice = this.extractValueChoice();
    this.numerador = this.numerador();
    this.denominador = this.denominador();
  }

  extractPonderationValue() {
    const ponderation = [];
    for (let i = 0; i < Object.keys(data).length; i++) {
      const data1 = this.data[i].ponderation;
      ponderation.push(data1);
    }
    return ponderation;
  }
  extractValueChoice() {
    const valueChoice = [];
    for (let i = 0; i < Object.keys(data).length; i++) {
      const data2 = this.data[i].valeurChoix;
      valueChoice.push(data2);
    }
    return valueChoice;
  }
  numerador(arr1 = this.ponderation, arr2 = this.valueChoice) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      const product = arr1[i] * arr2[i];
      sum += product;
    }
    return sum;
  }
  denominador() {
    const array = this.ponderation;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  total(val1 = this.numerador, val2 = this.denominador) {
    const total = val1 / val2;
    return total;
  }
}

const work = new Feature(data.work).total();
const finance = new Feature(data.finance).total();
const social = new Feature(data.social).total();
const leisure = new Feature(data.leisure).total();
const health = new Feature(data.health).total();

var ponderee = [];
ponderee.push(work, finance, social, leisure, health);

const final = ponderee.map(function (each_element) {
  return Number(each_element.toFixed(2));
});

const data2 = [0.1, 0.1, 0.1, 0.1, 0.1];
const total = final.map((num, idx) => num + data2[idx]);

function score(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
const sumFinal = score(final);

export const totalScore = sumFinal / final.length;
console.log(totalScore); // 0.65

const data_exemple = {
  labels: Object.keys(data), //['work', 'finance', 'social', 'leisure', 'health']
  datasets: [
    {
      label: "Dataset 1",
      data: final,
      type: "bar",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      barThickness: 20,
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
          display: false,
          // labelString: "Options",
        },
        // stacked: "true",
      },
      {
        gridLines: {
          drawBorder: true,
          display: false,
          lineWidth: 0,
        },
        ticks: {
          display: false,

          // beginAtZero: true,
        },
      },
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Value",
        },

        gridLines: {
          drawBorder: true,
          display: false,
          lineWidth: 0,
        },
        // stacked: "true",
        ticks: {
          display: true,
          fontSize: 15,
          // beginAtZero: true,
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
