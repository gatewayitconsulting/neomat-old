import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';
import { Avatar } from "@material-ui/core";

// images
import avatarImage from "../../assets/imgs/john.jpg";

// Styles
import { whiteColor } from "../../styles/neomat/core.js";
import { LinkedIn, Email, LocationOn, LaptopMac } from "@material-ui/icons";
import contactStyles from "../../styles/advertisementStyles.js";

const useStyles = makeStyles(contactStyles);

export default function ContactSection() {
  const classes = useStyles();
  const avatarSize = "200px";
  return (
    <div className={classes.container} style={{ textAlign: "center", marginTop: "2em", marginBottom: "2em" }}>
        <h1>Contact Me</h1>
        <Avatar 
            alt="John Montanye" 
            src={avatarImage} 
            style={{ 
                height: avatarSize,
                width: avatarSize,
                marginLeft: "auto",
                marginRight: "auto",
                boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222"
            }}
        />
        <Grid container spacing={1} style={{ marginTop: "2em", marginBottom: "2em" }}>
            <Grid item xs={12} sm={4}>
                <Link href="https://www.linkedin.com/in/john-montanye/" target="_blank" rel="noopener" style={{ color: "#FFF" }}>
                    <LinkedIn
                        fontSize="large"
                        style={{ display: "inline", verticalAlign: "middle" }}
                        className={classes.hoverSecondary}
                    />
                    <span
                        style={{ color: whiteColor, display: "inline", verticalAlign: "middle" }}
                        className={classes.hoverSecondary}
                    >
                        LinkedIn
                    </span>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Link href="https://goo.gl/maps/4yb3nLeBr8TwYhwT7" target="_blank" rel="noopener" style={{ color: "#FFF" }}>
                    <LocationOn
                        fontSize="large"
                        style={{ display: "inline", verticalAlign: "middle" }}
                        className={classes.hoverSecondary}
                    />
                    <span
                        style={{ color: whiteColor, display: "inline", verticalAlign: "middle" }}
                        className={classes.hoverSecondary}
                    >
                        Edwardsville, IL
                    </span>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Link href="https://www.gatewayitconsulting.com/contact-us" target="_blank" rel="noopener" style={{ color: "#FFF" }}>
                    <LaptopMac
                        fontSize="large"
                        style={{ display: "inline", verticalAlign: "middle" }}
                        className={classes.hoverSecondary}
                    />
                    <span
                        style={{ color: whiteColor, display: "inline", verticalAlign: "middle" }}
                        className={classes.hoverSecondary}
                    >
                        Business Inquiries
                    </span>
                </Link>
            </Grid>
        </Grid>
        {/* <Link href="#" target="_blank" rel="noopener" download>
            <Description fontSize="large" style={{ display: "inline", verticalAlign: "middle" }} />
            <span style={{ color: whiteColor, display: "inline", verticalAlign: "middle" }}>
                Resume
            </span>
        </Link> */}
        <Typography paragraph style={{ fontSize: "1em", fontStyle: "italic", marginTop: "1em" }}>
            *References available upon request
        </Typography>
        <Link href="mailto:jmontanye24@gmail.com" target="_blank" rel="noopener">
            <Button className={classes.buttonPrimary + " " + classes.buttonLink} startIcon={<Email/>} id="buttonIconGuides">
                Email me
            </Button>
        </Link>
    </div>
  );
}