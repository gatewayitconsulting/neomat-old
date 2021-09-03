import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import { Avatar } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

// sections of this Page
import Footer from "./footer";

// images
import htmlImage from "../assets/imgs/skills/html5.svg";
import adobeIllustratorImage from "../assets/imgs/skills/adobeillustrator.svg";
import adobePhotoshopImage from "../assets/imgs/skills/adobephotoshop.svg";
import atlassianImage from "../assets/imgs/skills/atlassian.svg";
import jiraImage from "../assets/imgs/skills/jira.svg";
import angularImage from "../assets/imgs/skills/angular.svg";
import bootstrapImage from "../assets/imgs/skills/bootstrap.svg";
import csharpImage from "../assets/imgs/skills/csharp.svg";
import css3Image from "../assets/imgs/skills/css3.svg";
import dotnetImage from "../assets/imgs/skills/dot-net.svg";
import gitImage from "../assets/imgs/skills/git.svg";
import githubImage from "../assets/imgs/skills/github-white.svg";
import googleanalyticsImage from "../assets/imgs/skills/googleanalytics.svg";
import gulpImage from "../assets/imgs/skills/gulp.svg";
import herokuImage from "../assets/imgs/skills/heroku.svg";
import invisionImage from "../assets/imgs/skills/invision.svg";
import javascriptImage from "../assets/imgs/skills/javascript.svg";
import jqueryImage from "../assets/imgs/skills/jquery.svg";
import jsonImage from "../assets/imgs/skills/json.svg";
import mailchimpImage from "../assets/imgs/skills/mailchimp.svg";
import materialdesignImage from "../assets/imgs/skills/materialdesign.svg";
import mysqlImage from "../assets/imgs/skills/mysql.svg";
import nodejsImage from "../assets/imgs/skills/nodejs.svg";
import npmImage from "../assets/imgs/skills/npm.svg";
import phpImage from "../assets/imgs/skills/php.svg";
import postgresqlImage from "../assets/imgs/skills/postgresql.svg";
import reactImage from "../assets/imgs/skills/react.svg";
import responsiveImage from "../assets/imgs/skills/responsive.svg";
import salesforceImage from "../assets/imgs/skills/salesforce.svg";
import sassImage from "../assets/imgs/skills/sass.svg";
import sketchImage from "../assets/imgs/skills/sketch.svg";
import slackImage from "../assets/imgs/skills/slack.svg";
import typescriptImage from "../assets/imgs/skills/typescript.svg";
import uxuiImage from "../assets/imgs/skills/ux-ui.svg";
import wordpressImage from "../assets/imgs/skills/wordpress.svg";
import shopifyImage from "../assets/imgs/skills/shopify.svg";
import newbalanceLogo from "../assets/imgs/newbalance.svg";
import syllogisteksLogo from "../assets/imgs/syllogisteks.ico";
import gatewayitconsultingLogo from "../assets/imgs/gitc.svg";
import websterUniversityLogo from "../assets/imgs/websteruniversity.png";

// icons
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

// styles
import homePageStyles from "../styles/homePageStyles";

const useStyles = makeStyles(homePageStyles);

export default function SkillsPage() {
    const avatarSize = "75px";
    const classes = useStyles();
    return (
        <div className={classes.containerFluid} style={{ textAlign: "center", marginTop: "2em", marginBottom: "2em" }}>
            <div className={classes.main} style={{ marginLeft: "2em", marginRight: "2em" }}>
                <Typography variant="h3" color="white">Resume</Typography>
                <Typography variant="body1" color="white" style={{ marginTop: "1em" }}><i>Currently only looking for small freelance projects.</i></Typography>
                <Typography style={{ marginTop: "2em" }}>
                    <Link href="#experience" color="white" style={{ marginRight: "1em", textDecoration: "underline" }}>
                        Experience
                    </Link>
                    <Link href="#education" color="white" style={{ marginRight: "1em", textDecoration: "underline" }}>
                        Education
                    </Link>
                    <Link href="#skills" color="white" style={{ marginRight: "1em", textDecoration: "underline" }}>
                        Skills
                    </Link>
                </Typography>
                <Typography variant="h3" component="h2" color="white" style={{ marginTop: "1em", textAlign: "left", marginLeft: ".5em" }} id="experience">Experience</Typography>
                <Grid container spacing={1} style={{ textAlign: "left", marginTop: "1em", marginBottom: "2em", paddingLeft: "2em", paddingRight: "2em" }}>
                    <Grid item xs={12}>
                        <div style={{ display: "flex", alignItems: "center", borderTop: "1px solid #FFF", paddingTop: "1em" }}>
                            <RadioButtonCheckedIcon style={{ marginRight: ".25em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} />
                            <Typography variant="body1" color="white">March, 2021 - Current</Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={newbalanceLogo} style={{ width: "50px", marginRight: ".5em" }} />
                            <Typography variant="h4" component="h3" color="white" style={{ display: "inline" }}>New Balance</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "3em" }}>
                        <div style={{ display: "flex", alignItems: "center", borderTop: "1px solid #FFF", paddingTop: "1em" }}>
                            <RadioButtonUncheckedIcon style={{ marginRight: ".25em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} />
                            <Typography variant="body1" color="white">March, 2018 - March, 2021</Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={syllogisteksLogo} style={{ width: "20px", marginRight: ".5em" }} />
                            <Typography variant="h4" component="h3" color="white" style={{ display: "inline" }}>SyllogisTeks</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "3em" }}>
                        <div style={{ display: "flex", alignItems: "center", borderTop: "1px solid #FFF", paddingTop: "1em" }}>
                            <RadioButtonCheckedIcon style={{ marginRight: ".25em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} />
                            <Typography variant="body1" color="white">2018 - Current</Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={gatewayitconsultingLogo} style={{ width: "30px", marginRight: ".5em" }} />
                            <Typography variant="h4" component="h3" color="white" style={{ display: "inline" }}>Gateway IT Consulting</Typography>
                        </div>
                        <Typography variant="body1" color="white" style={{ marginTop: ".25em", marginBottom: ".25em" }}><i>Clients include internal and Our Lady's Inn.</i></Typography>
                        <Typography variant="body1" color="white" style={{ marginLeft: "1em" }}>- Project managed from a technical perspective, successful virtual marathon for response to COVID business impact.</Typography>
                        <Typography variant="body1" color="white" style={{ marginLeft: "1em" }}>- Prototyped in inVision and developed TypeScript, Angular 11, Material Design, SASS, HTML5, external facing, data driven dashboard.</Typography>
                        <Typography variant="body1" color="white" style={{ marginLeft: "1em" }}>- Designed and developed JavaScript, Angular 7, Bootstrap 4, SASS, HTML5, JSON-using external facing, responsive application.</Typography>
                        <Typography variant="body1" color="white" style={{ marginLeft: "1em" }}>- Prototyped in Sketch and developed JavaScript, AngularJS, PHP, SASS, CSS3, HTML5 external facing, responsive website using custom wrote SASS library.</Typography>
                        <Typography variant="body1" color="white" style={{ marginLeft: "1em" }}>- Developed application using WordPress, JavaScript, CSS3, HTML5, PHP, SQL, and Google Analytics.</Typography>
                        <Typography variant="body1" color="white" style={{ marginLeft: "1em" }}>- Developed information reports of user data from Google Analytics for organizations to optimize social media outreach and used 3rd party form integration tools to increase website traffic and profit generation from virtual events.</Typography>
                        <Typography variant="body1" color="white" style={{ marginLeft: "1em" }}>- Supported several WordPress websites using JavaScript, CSS3, HTML5, PHP, SQL, and Google Analytics.</Typography>
                        <Typography variant="body1" color="white" style={{ marginLeft: "1em" }}>- Developed custom made CSS3/SASS library to be used as an alternative for clients to Bootstrap.</Typography>
                        <Typography variant="body1" color="white" style={{ marginLeft: "1em" }}>- Supported projects with Git and GitHub.</Typography>
                        <Typography variant="body1" color="white" style={{ marginLeft: "1em" }}>- Developed optimization tasks using Gulp, NPM, and Batch files.</Typography>
                        <Typography variant="body1" color="white" style={{ marginLeft: "1em" }}>- Used Photoshop to create and optimize multi-layered graphics for applications and brands.</Typography>
                    </Grid>
                </Grid>
                <Typography variant="h3" component="h2" color="white" style={{ marginTop: "1em", textAlign: "left", marginLeft: ".5em" }} id="education">Education</Typography>
                <Grid container spacing={1} style={{ textAlign: "left", marginTop: "1em", marginBottom: "2em", paddingLeft: "2em", paddingRight: "2em" }}>
                    <Grid item xs={12}>
                        <div style={{ display: "flex", alignItems: "center", borderTop: "1px solid #FFF", paddingTop: "1em" }}>
                            <RadioButtonCheckedIcon style={{ marginRight: ".25em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} />
                            <Typography variant="body1" color="white">Graduated December 2017</Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={websterUniversityLogo} style={{ width: "50px", marginRight: ".5em", paddingTop: "1em", paddingBottom: "1em" }} />
                            <Typography variant="h4" component="h3" color="white" style={{ display: "inline" }}>Webster University, St. Louis, Missouri</Typography>
                        </div>
                        <Typography variant="body1" color="white">- Bachelor’s Degree in Information Systems, Minor in Web Development - 3.5 GPA / Minor Completed with GPA of 3.76</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} style={{ marginTop: "1em", marginBottom: "2em", paddingBottom: "3em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} id="skills">
                    <Grid item xs={12}>
                        <Typography variant="h3" component="h2" color="white" style={{ marginTop: "2em" }}>Skills</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="HTML5 Icon"
                            src={htmlImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>HTML5</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Adobe Illustrator Icon"
                            src={adobeIllustratorImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Adobe <br />Illustrator</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Adobe Photoshop Icon"
                            src={adobePhotoshopImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Adobe <br />Photoshop</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Atlassian Icon"
                            src={atlassianImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Atlassian</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Jira Icon"
                            src={jiraImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Jira</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Angular Icon"
                            src={angularImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Angular</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Bootstrap Icon"
                            src={bootstrapImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Bootstrap</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="C# Icon"
                            src={csharpImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>C#</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="CSS3 Icon"
                            src={css3Image}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>CSS3</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt=".NET Icon"
                            src={dotnetImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>.NET</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Git Icon"
                            src={gitImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Git</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Github Icon"
                            src={githubImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Github</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Google Analytics Icon"
                            src={googleanalyticsImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Google <br />Analytics</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Gulp Icon"
                            src={gulpImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Gulp</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Heroku Icon"
                            src={herokuImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Heroku</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="inVision Icon"
                            src={invisionImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>inVision</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="JavaScript Icon"
                            src={javascriptImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>JavaScript</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="jQuery Icon"
                            src={jqueryImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>jQuery</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="JSON Icon"
                            src={jsonImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>JSON</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Mailchimp Icon"
                            src={mailchimpImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Mailchimp</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Material Design Icon"
                            src={materialdesignImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Material <br />Design</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Node JS Icon"
                            src={nodejsImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Node JS</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="MySQL Icon"
                            src={mysqlImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>MySQL</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="NPM Icon"
                            src={npmImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>NPM</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="PHP Icon"
                            src={phpImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>PHP</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="PostGRESQL Icon"
                            src={postgresqlImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>PostgreSQL</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="ReactJS Icon"
                            src={reactImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>ReactJS</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Responsive Design Icon"
                            src={responsiveImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Responsive <br />Design</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Salesforce Icon"
                            src={salesforceImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Salesforce</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="SASS Icon"
                            src={sassImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>SASS</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Sketch Icon"
                            src={sketchImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Sketch</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Slack Icon"
                            src={slackImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Slack</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="TypeScript Icon"
                            src={typescriptImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>TypeScript</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="UX UI Icon"
                            src={uxuiImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>UX UI</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="WordPress Icon"
                            src={wordpressImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>WordPress</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                        <Avatar
                            alt="Shopify Icon"
                            src={shopifyImage}
                            style={{
                                height: avatarSize,
                                width: avatarSize,
                                objectFit: "contain",
                                marginLeft: "auto",
                                marginRight: "auto",
                                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
                            }}
                        />
                        <Typography variant="body1" style={{ marginTop: "1.5em" }}>Shopify</Typography>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        </div>
    );
}
