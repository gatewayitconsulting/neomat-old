import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components

// sections of this Page
import homePageStyles from "../styles/homePageStyles";
import BannerSection from "./sections/banner.js";
import ProjectsSection from "./sections/projects.js";


const useStyles = makeStyles(homePageStyles);

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.containerFluid}>
      <div className={classes.main}>
          <BannerSection />
          {/* <ProjectsSection /> */}
      </div>
    </div>
  );
}
