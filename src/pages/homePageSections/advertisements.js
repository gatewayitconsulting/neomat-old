import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

// icons
import { Book, GitHub } from "@material-ui/icons";

// Styles
import mockCopyStyles from "../../styles/advertisementStyles.js";

const useStyles = makeStyles(mockCopyStyles);

export default function MockCopySection() {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ textAlign: "center", marginTop: "2em", marginBottom: "2em" }}>
        <div style={{ marginTop: "2em", marginBottom: "2em" }}>
            <h1>About This Website</h1>
            <Typography paragraph style={{ fontSize: "1em" }}>
                This website was developed using ReactJS, JavaScript, Material Design, CSS, and HTML5. 
                The different looking style is based off a design pattern I call neomat, which blends concepts 
                of Neumorphism and Material Design together. Check out the code for this website on Github below.
            </Typography>
            <Link href="https://github.com/gatewayitconsulting/neomat" title="See code on Github" target="_blank" rel="noopener">
                <Button className={classes.buttonPrimary + " " + classes.buttonLink} startIcon={<GitHub/>} id="buttonIconGithub">
                    Github
                </Button>
            </Link>
        </div>
        <div style={{ marginTop: "2em", marginBottom: "2em" }}>
            <h1>Professional Guides</h1>
            <Typography paragraph>
                Check out my professional guides on how to get more familiar with website development and software engineering 
                related paths.
            </Typography>
            <Link href="/Guides">
                <Button className={classes.buttonPrimary + " " + classes.buttonLink} startIcon={<Book/>} id="buttonIconGuides">
                    See guides
                </Button>
            </Link>
        </div>
    </div>
  );
}