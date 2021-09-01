import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

// images
import bannerImage from "../../assets/imgs/banner.jpg";
// Styles
import bannerStyles from "../../styles/bannerStyles.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(bannerStyles);

export default function BannerSection() {
  const classes = useStyles();
  return (
    <div className={classes.bannerStyle} style={{
      backgroundImage: `url(${bannerImage})`,
    }}>
      <div className={classes.bannerCopyContainer}>
        <Typography variant="h3" className={classes.customTitle}>
          John Montanye, creative <br /> &amp; software engineer.
        </Typography>
      </div>
    </div>
  );
}
