import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components

// sections of this Page
import homePageStyles from "../styles/homePageStyles";
import BannerSection from "./homePageSections/banner.js";
import AdvertisementSection from "./homePageSections/advertisements.js";
import ContactSection from "./homePageSections/contact.js";
import ProjectsSection from "./homePageSections/projects.js";
import Footer from "./footer";


const useStyles = makeStyles(homePageStyles);

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.containerFluid}>
      <div className={classes.main}>
          <BannerSection />
          {/* <ProjectsSection /> */}
          <AdvertisementSection />
          <ContactSection />
          <Footer />
      </div>
    </div>
  );
}
