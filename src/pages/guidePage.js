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
import Footer from "./footer";

// styles
import guidesPageStyles from "../styles/guidesPageStyles";

import guideImage from "../assets/imgs/entry-developer.jpg";

const useStyles = makeStyles(guidesPageStyles);

export default function GuidePage() {
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
                                    href="/guides"
                                    aria-current="page"
                                >
                                    <ArrowBack style={{ fontSize: ".75rem" }} /> Guides
                                </Link>
                                <Typography color="white">
                                    Want to become a website developer?
                                </Typography>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="white" variant="h3">
                                Want to become a website developer?
                            </Typography>
                            <Typography color="white">
                                Last updated: 08/29/2021
                            </Typography>
                            <img
                                src={guideImage}
                                alt="Contemplating developer"
                                id="guideImage"
                                style={{ width: "100%", borderRadius: "5px", marginTop: "1em" }}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: "1em" }}>
                            <Button
                                className={classes.buttonPrimary + " " + classes.buttonLink}
                                id="buttonIconGithub"
                                aria-label="Read More"
                                href="#skills"
                            >
                                Take me to the skills I need
                            </Button>
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
                            <Typography gutterBottom variant="h5" style={{ marginTop: "1em" }}>
                                Nice haves are:
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <b>- The Agile Methodology</b>, which defines how you will be planning, designing, and developing websites in your daily career. It will also define how to communicate with teams that interface with websites and application projects.
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <b>- Git &amp; Version Control</b> will help you organize code and avoid coding errors when working with more than one person on a project.
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <b>- ReactJS, Angular, and VueJS</b> are JavaScript libraries and frameworks (in case of Angular) that are similar to SASS in that they include several pre-built JavaScript functionalities that make developing easier and quicker. These libraries are highly prized in recruiting for jobs.
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <b>- NPM</b> is a package manager tool that is essential to installing several of the libraries and frameworks discussed above. It is often used in a CLI format that can be worked by entering different commands to achieve different results.
                            </Typography>
                            <Typography gutterBottom variant="h5" id="skills" style={{ marginTop: "1em" }}>
                                Skills to Learn:
                            </Typography>
                            {/* <Typography gutterBottom variant="body1">
                                <b>Must Haves</b>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <b>Must Haves</b>
                            </Typography> */}
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div>
        </div >
    );
}
