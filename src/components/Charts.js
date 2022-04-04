import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import chartsStyle from "../assets/jss/chartsStyle.js";
import LineChart from "./LineChart.js";

const useStyles = makeStyles(chartsStyle);

export default function Charts() {
  const classes = useStyles();

  return (
    <div className={classes.chartsContainer}>
      <LineChart />
      <LineChart />
    </div>
  );
}
