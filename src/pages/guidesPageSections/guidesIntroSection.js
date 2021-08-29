import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Grid from '@material-ui/core/Grid';
import ContentTabs from "../../components/ContentTabs.js";

// Styles
import guidesPageStyles from "../../styles/guidesPageStyles.js";

const useStyles = makeStyles(guidesPageStyles);

export default function GuidesIntroSection() {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ textAlign: "center", marginTop: "2em", marginBottom: "2em" }}>
        <h1 className={classes.guideHeader}>Professional Guides</h1>
        <Grid container spacing={1} style={{ marginTop: "2em", marginBottom: "2em" }}>
            <Grid item xs={12}>
                <p>
                  Have you ever had interest in website development or software engineering but are having trouble 
                  figuring out how to get into the field? These guides are made so that someone can figure out exactly 
                  what skills are used often in the professional world and see the information, books, and courses that 
                  will help them acquire a good understanding, quickly.
                </p>
            </Grid>
            <Grid item xs={12}>
              <ContentTabs
                alignCenter
                tabs={[
                  {
                    tabButton: "All",
                    tabContent: ""
                  },
                  {
                    tabButton: "Developer",
                    tabContent: ""
                  },
                  {
                    tabButton: "Agile",
                    tabContent: ""
                  },
                  {
                    tabButton: "Low Hanging",
                    tabContent: ""
                  }
                ]}
              />
            </Grid>
        </Grid>
    </div>
  );
}