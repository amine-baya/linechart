import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import navigateHolderStyle from "../assets/jss/navigateStyle.js";

const useStyles = makeStyles(navigateHolderStyle);

export default function Navigate() {
  const classes = useStyles();

  return (
    <div className={classes.navigateContainer}>
      <ul className={classes.ulNavigate}>
        <li className={classes.liNavigate}>Create</li>
        <li className={classes.liNavigate}>Total Value Asset</li>
        <li className={classes.liNavigate}>Portfolio</li>
      </ul>
    </div>
  );
}
