import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import { Avatar } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

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


// styles
import homePageStyles from "../styles/homePageStyles";

const useStyles = makeStyles(homePageStyles);

export default function SkillsPage() {
    const avatarSize = "75px";
    const classes = useStyles();
    return (
        <div className={classes.containerFluid} style={{ textAlign: "center", marginTop: "2em", marginBottom: "2em" }}>
            <div className={classes.main}>
                <Typography variant="h4" color="white">Skills and Experience</Typography>
                <Typography variant="body1" color="white" style={{ marginTop: "1em" }}><i>Currently only looking for small freelance projects.</i></Typography>
                <Typography variant="h4" component="h2" color="white" style={{ marginTop: "2em" }}>Experience</Typography>
                <Typography variant="h4" component="h2" color="white" style={{ marginTop: "2em" }}>Skills</Typography>
                <Grid container spacing={1} style={{ marginTop: "1em", marginBottom: "2em" }}>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>HTML5</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Adobe <br />Illustrator</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Adobe <br />Photoshop</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Atlassian</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Jira</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Angular</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Bootstrap</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>C#</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>CSS3</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>.NET</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Git</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Github</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Google <br />Analytics</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Gulp</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Heroku</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>inVision</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>JavaScript</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>jQuery</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>JSON</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Mailchimp</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Material <br />Design</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Node JS</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>MySQL</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>NPM</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>PHP</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>PostgreSQL</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>ReactJS</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Responsive <br />Design</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Salesforce</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>SASS</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Sketch</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>Slack</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>TypeScript</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>UX UI</Typography>
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
                        <Typography variant="h5" style={{ marginTop: "1em" }}>WordPress</Typography>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        </div>
    );
}
