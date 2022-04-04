import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import lineChartsStyle from "../assets/jss/lineChartStyle";

const useStyles = makeStyles(lineChartsStyle);

export default function Charts() {
  const classes = useStyles();

  return (
    <div className={classes.lineChartsContainer}>
      <Line
        data={{
          labels: [
            " ",
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"
          ],
          datasets: [
            {
              label: "votes",
              data: [0, 10, 40, 22, 26, 32, 25, 45, 18, 21],
              backgroundColor: "#ff00004d",
              borderWidth: "1px"
            }
          ]
        }}
        height={400}
        width={600}
        options={{
          tension: 0.5,
          fill: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}
