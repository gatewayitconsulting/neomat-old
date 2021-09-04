import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';


// Styles
import footerStyles from "../styles/footerStyles.js";
import { Email } from "@material-ui/icons";

const useStyles = makeStyles(footerStyles);

export default function Footer() {
    const classes = useStyles();
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div className={classes.containerFluid + " " + classes.footer}>
            <Grid container style={{ paddingTop: "1em", paddingBottom: "1em", marginLeft: "1em", marginRight: "1em" }}>
                <Grid item xs={12} sm={1}></Grid>
                <Grid item xs={12} sm={9}>
                    <span style={{ color: "white", verticalAlign: "middle" }}>
                        &copy; {currentYear} <Link href="https://www.jmdesigns.io/" target="_blank" rel="noopener" style={{ color: "#FFF" }}>JMDesigns.io</Link>
                    </span>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Link href="mailto:jmontanye24@gmail.com" target="_blank" rel="noopener" style={{ color: "#FFF" }}>
                        <Button className={classes.buttonPrimary} startIcon={<Email />} id="buttonIconGuides" style={{ color: "#FFF" }}>
                            Email me
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}