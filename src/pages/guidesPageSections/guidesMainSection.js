import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Styles
import guidesPageStyles from "../../styles/guidesPageStyles.js";

const useStyles = makeStyles(guidesPageStyles);

export default function GuidesMainSection() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Paper elevation={4} style={{marginLeft: "2em", marginRight: "2em"}}>
        <div className={classes.container} style={{ marginTop: "2em", marginBottom: "2em", paddingTop: "2em", paddingBottom: "2em" }}>
            <h2>Want to become a website developer?</h2>
            <Link 
                href="#skills"
                title="Get right to the skills part of this guide"
            >
                Take me to the skills I need
            </Link>
            <Grid container>
                <Grid item xs={12} md={10}>
                    <p>
                        To become a website developer, you must understand the basic building blocks that make up a website 
                        and how they function. Skills you must learn include HTML5, CSS, and JavaScript.
                    </p>
                    <p>
                        Responsive Design will make your website look good no matter the screen size and should always be a 
                        priority when you are developing any website or app.
                    </p>
                    <p>
                        SASS is a coding language that makes CSS easier to use and more reusable which will save you time from 
                        the get go when developing websites and apps.
                    </p>
                    <p>
                        Bootstrap and Material Design are two different design frameworks that include prebuilt HTML elements 
                        and designs for those elements so that you can write less code and get your web app up and running quicker.
                    </p>
                    <p><b>Nice haves are:</b></p>
                    <p>
                        The Agile Methodology, which defines how you will be planning, designing, and developing websites in your 
                        daily career. It will also define how to communicate with teams that interface with websites and 
                        application projects.
                    </p>
                    <p>
                        Git &amp; Version Control will help you organize code and avoid coding errors when working with more than 
                        one person on a project. 
                    </p>
                    <p>
                        ReactJS, Angular, and VueJS are JavaScript libraries and frameworks (in case of Angular) that are similar 
                        to SASS in that they include several pre-built JavaScript functionalities that make developing easier and 
                        quicker. These libraries are highly prized in recruiting for jobs.
                    </p>
                    <p>
                        NPM is a package manager tool that is essential to installing several of the libraries and frameworks 
                        discussed above. It is often used in a CLI format that can be worked by entering different commands to 
                        achieve different results.
                    </p>
                </Grid>
            </Grid>
            <Grid container spacing={1} style={{ marginTop: "2em", marginBottom: "2em" }} id="skills">
                <Grid item xs={12} style={{ marginTop: "0", marginBottom: "2em" }}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                            <h3 className={classes.accordionPrimaryHeader}>Skills to Learn</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <h4 className={classes.accordionDetailsHeader}>Must Haves</h4>
                            <ul className={classes.accordionList}>
                                <li>
                                    - HTML5 -
                                    <Link 
                                        href="https://www.w3schools.com/html/html_intro.asp"
                                        title="Get started with HTML5"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        Get Started
                                    </Link>
                                </li>
                                <li>
                                    - CSS -
                                    <Link 
                                        href="https://www.w3schools.com/css/css_intro.asp"
                                        title="Get started with CSS"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        Get Started
                                    </Link>
                                </li>
                                <li>
                                    - SASS -
                                    <Link 
                                        href="https://sass-lang.com/guide"
                                        title="Get started with SASS"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        Get Started
                                    </Link>
                                </li>
                                <li>
                                    - Responsive Design -
                                    <Link 
                                        href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
                                        title="Get started with responsive design"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        Get Started
                                    </Link>
                                </li>
                                <li>
                                    - JavaScript - 
                                    <Link 
                                        href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash"
                                        title="Get started with JavaScript"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        Get Started
                                    </Link>
                                </li>
                                <li>
                                    - Bootstrap or Material Design -
                                    <Link 
                                        href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
                                        title="Get started with Bootstrap"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        Bootstrap Get Started
                                    </Link>
                                    <span style={{ marginLeft: ".25em" }}> or </span>
                                    <Link 
                                        href="https://material.io/design/introduction"
                                        title="Get started with Material Design"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        Material Design Get Started
                                    </Link>
                                </li>
                            </ul>
                            <h4 className={classes.accordionDetailsHeader}>Nice to Haves</h4>
                            <ul className={classes.accordionList}>
                                <li>
                                    - Agile Methodology -
                                    <Link 
                                        href="https://medium.com/shecancode/an-introduction-to-agile-software-development-914339dcec66"
                                        title="Get started with the Agile methodology"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        Get Started
                                    </Link>
                                </li>
                                <li>
                                    - Git &amp; Version Control -
                                    <Link 
                                        href="https://www.atlassian.com/git/tutorials/what-is-version-control"
                                        title="Get started with version control and Git"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        Get Started
                                    </Link>
                                </li>
                                <li>
                                    - ReactJS, Angular, or VueJS -
                                    <Link 
                                        href="https://reactjs.org/tutorial/tutorial.html"
                                        title="Get started with ReactJS"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        ReactJS Get Started
                                    </Link>
                                    <span style={{ marginLeft: ".25em" }}> or </span>
                                    <Link 
                                        href="https://angular.io/guide/what-is-angular"
                                        title="Get started with Angular"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        Angular Get Started
                                    </Link>
                                    <span style={{ marginLeft: ".25em" }}> or </span>
                                    <Link 
                                        href="https://vuejs.org/v2/guide/"
                                        title="Get started with VueJS"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        VueJS Get Started
                                    </Link>
                                </li>
                                <li>
                                    - NPM &amp; Node.JS -
                                    <Link 
                                        href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"
                                        title="Get started with NPM and Node.JS"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        Get Started
                                    </Link>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                            <h3 className={classes.accordionPrimaryHeader}>Must Have Books</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className={classes.accordionList}>
                                <li>
                                    <Link 
                                        href="https://www.amazon.com/Web-Design-HTML-JavaScript-jQuery/dp/1118907442/"
                                        title="Buy Web Design with HTML, CSS, JavaScript and jQuery Set by Jon Duckett"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        - Web Design with HTML, CSS, JavaScript and jQuery Set by Jon Duckett
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary-dp-0135957052/dp/0135957052/"
                                        title="Buy The Pragmatic Programmer: Your Journey To Mastery by David Thomas and Andrew Hunt"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        - The Pragmatic Programmer: Your Journey To Mastery by David Thomas and Andrew Hunt
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="https://www.scrum.org/resources/scrum-guide"
                                        title="Buy The Scrum Guide by Ken Schwaber and Jeff Sutherland"
                                        target="_blank"
                                        rel="noopener"
                                        style={{ marginLeft: ".25em" }}
                                    >
                                        - The Scrum Guide by Ken Schwaber and Jeff Sutherland
                                    </Link>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                            <h3 className={classes.accordionPrimaryHeader}>Bootcamps &amp; Courses</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                        <h4 className={classes.accordionDetailsHeader}>Bootcamps</h4>
                        <ul className={classes.accordionList}>
                            <li>
                                <Link 
                                    href="https://brainstation.io/course/online/remote-web-development-bootcamp"
                                    title="Take the Coding Bootcamp Online by Brainstation"
                                    target="_blank"
                                    rel="noopener"
                                    style={{ marginLeft: ".25em" }}
                                >
                                    - Coding Bootcamp Online by Brainstation
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="https://www.thinkful.com/bootcamp/web-development/#introduction"
                                    title="Take the Software Engineering Bootcamp by Thinkful"
                                    target="_blank"
                                    rel="noopener"
                                    style={{ marginLeft: ".25em" }}
                                >
                                    - Software Engineering Bootcamp by Thinkful
                                </Link>
                            </li>
                        </ul>
                        <h4 className={classes.accordionDetailsHeader}>Courses</h4>
                        <ul className={classes.accordionList}>
                            <li>
                                <Link 
                                    href="https://javascript30.com/"
                                    title="Take the JavaScript30 (free) course"
                                    target="_blank"
                                    rel="noopener"
                                    style={{ marginLeft: ".25em" }}
                                >
                                    - JavaScript30 (free)
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="https://www.udemy.com/course/the-complete-javascript-course/"
                                    title="Take the Complete JavaScript Course 2021 by udemy"
                                    target="_blank"
                                    rel="noopener"
                                    style={{ marginLeft: ".25em" }}
                                >
                                    - The Complete JavaScript Course 2021 by udemy
                                </Link>
                            </li>
                        </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                            <h3 className={classes.accordionPrimaryHeader}>Next Steps</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                The next step of your journey to becoming a website developer is to learn about APIs 
                                and how to consume them to show data in your application. Another guide is coming 
                                soon that will talk about how to create one and what else you need to know to work 
                                with APIs.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </div>
    </Paper>
  );
}