import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Grid from '@material-ui/core/Grid';

// Styles
import guidesPageStyles from "../../styles/guidesPageStyles.js";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(guidesPageStyles);

export default function GuidesIntroSection() {
  const classes = useStyles();

  return (
    <div className={classes.container} style={{ textAlign: "center", marginTop: "4em", marginBottom: "2em" }}>
      <Typography className={classes.guideHeader} variant="h3" color="white">Professional Guides</Typography>
      <Grid container spacing={1} style={{ marginTop: "2em", marginBottom: "2em" }}>
        <Grid item xs={12}>
          <p>
            Have you ever had interest in website development or software engineering but have had trouble
            figuring out how to get into the field? These guides are made so that someone can figure out exactly
            what skills are used often in the professional world and get into understanding them quickly.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}