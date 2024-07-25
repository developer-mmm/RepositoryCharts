import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function Piechart({ data, categories }) {
  const [chartData, setchartData] = useState({
    series: [
      {
        name: "",
        data,
      },
      {
        name: "Times",
        type: "column",
        data,
      },
    ],
    options: {
      chart: {
        title: {
          text: "Level Languages ",
        },
        type: "line",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories,

        title: {
          text: "Second line is All Repositories = Undefined..... !!!!!!!!! Level Languages! ",
        },
      },
    },
  });
  return (
    <div>
      <div>
        <div id="chart">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </div>
  );
}

export default Piechart;
