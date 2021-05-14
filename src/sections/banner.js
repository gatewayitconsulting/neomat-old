import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

// Styles
import bannerStyles from "../styles/bannerStyles.js";

const useStyles = makeStyles(bannerStyles);

export default function BannerSection() {
  const classes = useStyles();
  return (
    <div>
        <h1>Banner</h1>
    </div>
  );
}
