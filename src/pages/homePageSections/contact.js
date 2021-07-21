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
import mockCopyStyles from "../../styles/advertisementStyles.js";
import { primaryColorPurple } from "../../styles/neomat/core.js";
import { LinkedIn, Email, LocationOn, PhoneIphone, Description } from "@material-ui/icons";

const useStyles = makeStyles(mockCopyStyles);

export default function MockCopySection() {
  const classes = useStyles();
  const avatarSize = "200px";
  return (
    <div className={classes.container} style={{ textAlign: "center", marginTop: "2em", marginBottom: "2em" }}>
        <h1>Contact Me</h1>
        <Avatar 
            alt="John Montanye" 
            src={avatarImage} 
            style={{ height: avatarSize, width: avatarSize, marginLeft: "auto", marginRight: "auto" }} 
        />
        <Grid container spacing={1} style={{ marginTop: "2em", marginBottom: "2em" }}>
            <Grid item xs={12} sm={4}>
                <Link href="https://www.linkedin.com/in/john-montanye/" target="_blank" rel="noopener">
                    <LinkedIn fontSize="large" style={{ display: "inline", verticalAlign: "middle" }} />
                    <span style={{ color: primaryColorPurple, display: "inline", verticalAlign: "middle" }}>
                        LinkedIn
                    </span>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Link href="https://goo.gl/maps/4yb3nLeBr8TwYhwT7" target="_blank" rel="noopener">
                    <LocationOn fontSize="large" style={{ display: "inline", verticalAlign: "middle" }} />
                    <span style={{ color: primaryColorPurple, display: "inline", verticalAlign: "middle" }}>
                        Edwardsville, IL
                    </span>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Link href="tel:3145789037" target="_blank" rel="noopener">
                    <PhoneIphone fontSize="large" style={{ display: "inline", verticalAlign: "middle" }} />
                    <span style={{ color: primaryColorPurple, display: "inline", verticalAlign: "middle" }}>
                        314-578-9037
                    </span>
                </Link>
            </Grid>
        </Grid>
        <Link href="#" target="_blank" rel="noopener" download>
            <Description fontSize="large" style={{ display: "inline", verticalAlign: "middle" }} />
            <span style={{ color: primaryColorPurple, display: "inline", verticalAlign: "middle" }}>
                Resume
            </span>
        </Link>
        <Typography paragraph style={{ fontSize: "1em", fontStyle: "italic", marginTop: "1em" }}>
            *References available upon request
        </Typography>
        <Button className={classes.buttonPrimary} startIcon={<Email/>} id="buttonIconGuides">
            <Link href="mailto:jmontanye24@gmail.com" target="_blank" rel="noopener" className={classes.buttonLink}>
                Email me
            </Link>
        </Button>
    </div>
  );
}