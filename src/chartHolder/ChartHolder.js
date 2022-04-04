import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import Navigate from "../components/Navigate.js";
import chartHolderStyle from "../assets/jss/chartHolderStyle.js";
import Charts from "../components/Charts.js";

const useStyles = makeStyles(chartHolderStyle);
export default function ChartHolder() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Navigate />
      <Charts />
    </div>
  );
}
