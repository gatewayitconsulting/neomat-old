import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Button } from "@material-ui/core";

// icons
import { ArrowBack } from "@material-ui/icons";

// sections of this Page
import Footer from "../footer";

// styles
import guidesPageStyles from "../../styles/guidesPageStyles";

import montanyeWeddingProjectImage from "../../assets/imgs/projects/montanye-wedding.PNG";

const useStyles = makeStyles(guidesPageStyles);

export default function BecomeDeveloperGuide() {
    const classes = useStyles();

    return (
        <div className={classes.containerFluid}>
            <div className={classes.main}>
                <div className={classes.container} style={{ marginTop: "2em", marginBottom: "2em" }}>
                    <Grid container spacing={1} style={{ marginTop: "2em", marginBottom: "2em" }}>
                        <Grid item xs={12}>
                            <Breadcrumbs aria-label="breadcrumb" color="white">
                                <Link
                                    color="white"
                                    href="/projects"
                                    aria-current="page"
                                >
                                    <ArrowBack style={{ fontSize: ".75rem" }} /> Projects
                                </Link>
                                <Typography color="white">
                                    Montanye Wedding
                                </Typography>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="white" variant="h3" style={{ marginTop: ".25em", marginBottom: ".25em" }} className={classes.gradientHeader}>
                                Montanye Wedding
                            </Typography>
                            <img
                                src={montanyeWeddingProjectImage}
                                alt="Contemplating developer"
                                id="guideImage"
                                style={{ width: "100%", borderRadius: "5px", marginTop: "1em" }}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: "1em", marginBottom: "1em", marginLeft: "auto", marginRight: "auto" }}>
                            <Typography gutterBottom variant="h5">
                                Overview
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                To become a website developer, you must understand the basic building blocks that make up a website and how they function. Skills you must learn include HTML5, CSS, and JavaScript.
                                Responsive Design will make your website look good no matter the screen size and should always be a priority when you are developing any website or app.
                                SASS is a coding language that makes CSS easier to use and more reusable which will save you time from the get go when developing websites and apps.
                                Bootstrap and Material Design are two different design frameworks that include prebuilt HTML elements and designs for those elements so that you can write less code and get your web app up and running quicker.
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div>
        </div >
    );
}
