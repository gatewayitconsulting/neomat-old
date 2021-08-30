import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components

// sections of this Page
import Footer from "./footer";
import GuidesIntroSection from "./guidesPageSections/guidesIntroSection";
import GuidesMainSection from "./guidesPageSections/guidesMainSection";

// styles
import homePageStyles from "../styles/homePageStyles";

const useStyles = makeStyles(homePageStyles);

export default function GuidesPage() {
  const classes = useStyles();
  return (
    <div className={classes.containerFluid}>
      <div className={classes.main}>
          <GuidesIntroSection />
          <GuidesMainSection />
          <Footer />
      </div>
    </div>
  );
}
