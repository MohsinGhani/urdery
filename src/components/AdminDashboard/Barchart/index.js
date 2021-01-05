import React from "react";
import Chart from "react-google-charts";

const Barchart = ({ data }) => {
  const options = {
    chart: {
      rx: 20,
      ry: 20,
    },

    strokeWidth: 10,
    stroke: "#888",
    colors: ["#33CB98"],
    legend: { position: "none" },
  };

  return (
    <Chart
      width={"500px"}
      height={"250px"}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={
        ([
          "Element",
          "Density",
          { role: "style" },
          {
            sourceColumn: 0,
            role: "annotation",
            type: "string",
            calc: "stringify",
          },
        ],
        [
          ["", ""],
          ["Ordering", 450],
          ["Catering", 950],
          ["merchandise", 90],
          ["Gift Cards", 700],
        ])
      }
      options={options}
    />
  );
};

export default Barchart;
