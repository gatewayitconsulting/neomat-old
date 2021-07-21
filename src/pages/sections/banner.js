import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

// images
import bannerImage from "../../assets/imgs/banner.jpg";
// Styles
import bannerStyles from "../../styles/bannerStyles.js";

const useStyles = makeStyles(bannerStyles);

export default function BannerSection() {
  const classes = useStyles();
  return (
    <div className={classes.bannerStyle} style={{ 
      backgroundImage: `url(${bannerImage})`,
    }}>
      <div className={classes.bannerCopyContainer}>
        <div className={classes.bannerCopyInnerContainer}>
          <div className={classes.bannerCopyInnerContainerWrapper}>
            <h1 className={classes.customTitle}>
              John Montanye, creative <br/> &amp; web developer.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
