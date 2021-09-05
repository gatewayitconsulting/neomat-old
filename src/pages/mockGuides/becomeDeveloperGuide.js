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

import guideImage from "../../assets/imgs/entry-developer.jpg";

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
                            <Typography color="white" variant="h3" style={{ marginTop: ".25em", marginBottom: ".25em" }} className={classes.gradientHeader}>
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
                            <Typography gutterBottom variant="body1" style={{ marginTop: "1em" }}>
                                <b>Must Haves</b>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - HTML5
                                <Link
                                    href="https://www.w3schools.com/html/html_intro.asp"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with HTML5"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - CSS3
                                <Link
                                    href="https://www.w3schools.com/css/css_intro.asp"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with CSS3"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - SASS
                                <Link
                                    href="https://sass-lang.com/guide"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with SASS"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - Responsive Design
                                <Link
                                    href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with Responsive Design"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - JavaScript
                                <Link
                                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with JavaScript"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - Bootstrap
                                <Link
                                    href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with Bootstrap"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - Material Design
                                <Link
                                    href="https://material.io/design/introduction"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with Material Design"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1" style={{ marginTop: "1em" }}>
                                <b>Nice to Haves</b>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - Agile Methodology
                                <Link
                                    href="https://medium.com/shecancode/an-introduction-to-agile-software-development-914339dcec66"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with Agile Methodology"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - Git &amp; Version Control
                                <Link
                                    href="https://www.atlassian.com/git/tutorials/what-is-version-control"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with Git &amp; Version Control"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - ReactJS
                                <Link
                                    href="https://reactjs.org/tutorial/tutorial.html"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with ReactJS"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - Angular
                                <Link
                                    href="https://angular.io/guide/what-is-angular"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with Angular"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - VueJS
                                <Link
                                    href="https://vuejs.org/v2/guide/"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with VueJS"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                - NPM &amp; Node.JS
                                <Link
                                    href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Get started with NPM &amp; Node.JS"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Get Started
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="h5" style={{ marginTop: "1em" }}>
                                Must Have Books:
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <Link
                                    href="https://www.amazon.com/Web-Design-HTML-JavaScript-jQuery/dp/1118907442/"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Buy Web Design with HTML, CSS, JavaScript and jQuery Set by Jon Duckett"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Web Design with HTML, CSS, JavaScript and jQuery Set by Jon Duckett
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <Link
                                    href="https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary-dp-0135957052/dp/0135957052/"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Buy The Pragmatic Programmer: Your Journey To Mastery by David Thomas and Andrew Hunt"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    The Pragmatic Programmer: Your Journey To Mastery by David Thomas and Andrew Hunt
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <Link
                                    href="https://www.scrum.org/resources/scrum-guide"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Buy The Scrum Guide by Ken Schwaber and Jeff Sutherland"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    The Scrum Guide by Ken Schwaber and Jeff Sutherland
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="h5" style={{ marginTop: "1em" }}>
                                Bootcamps &amp; Courses:
                            </Typography>
                            <Typography gutterBottom variant="body1" style={{ marginTop: "1em" }}>
                                <b>Bootcamps</b>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <Link
                                    href="https://brainstation.io/course/online/remote-web-development-bootcamp"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Take the Coding Bootcamp Online by Brainstation"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Coding Bootcamp Online by Brainstation
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <Link
                                    href="https://www.thinkful.com/bootcamp/web-development/#introduction"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Take the Software Engineering Bootcamp by Thinkful"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    Software Engineering Bootcamp by Thinkful
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1" style={{ marginTop: "1em" }}>
                                <b>Courses</b>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <Link
                                    href="https://javascript30.com/"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Take the JavaScript30 (free) course"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    JavaScript30 (free)
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <Link
                                    href="https://www.udemy.com/course/the-complete-javascript-course/"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Take The Complete JavaScript Course 2021 by udemy"
                                    color="white"
                                    style={{ textDecoration: "underline", marginLeft: ".5em" }}
                                >
                                    The Complete JavaScript Course 2021 by udemy
                                </Link>
                            </Typography>
                            <Typography gutterBottom variant="h5" style={{ marginTop: "1em" }}>
                                Next Steps:
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                The next step of your journey to becoming a website developer is to learn about APIs and how to consume them to show data in your application. Another guide is coming soon that will talk about how to create one and what else you need to know to work with APIs.
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div>
        </div >
    );
}
