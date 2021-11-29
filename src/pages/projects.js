import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from "@material-ui/core";

// images
import montanyeWeddingProjectImage from "../assets/imgs/projects/montanye-wedding.PNG";
import ourLadysInnProjectImage from "../assets/imgs/projects/ourLadysInn.jpg";
import thePalateSTLProjectImage from "../assets/imgs/projects/thePalateSTL.JPG";

// sections of this Page
import Footer from "./footer";

// styles
import homePageStyles from "../styles/projectsStyles";

const useStyles = makeStyles(homePageStyles);

export default function ProjectsPage() {
    const classes = useStyles();
    return (
        <div className={classes.containerFluid}>
            <div className={classes.main} style={{ marginLeft: "2em", marginRight: "2em" }}>
                <Typography variant="h3" className={classes.gradientHeader} color="white" style={{ marginTop: "1em", textAlign: "center" }}>Projects</Typography>
                <Grid container spacing={1} style={{ marginTop: "2em", marginBottom: "2em" }}>
                    <Grid item xs={12}>
                        <div>
                            <Card className={classes.root} style={{ marginTop: "1em", marginBottom: "1em" }}>
                                <CardActionArea href={`projects/montanye-wedding`}>
                                    <CardMedia
                                        className={classes.media}
                                        image={montanyeWeddingProjectImage}
                                        title="Check out Montanye Wedding project"
                                    />
                                    <CardContent style={{ marginLeft: "1em", marginRight: "1em", textAlign: "center" }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Montanye Wedding
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <Card className={classes.root} style={{ marginTop: "1em", marginBottom: "1em" }}>
                                <CardActionArea href={`guides/become-a-developer`}>
                                    <CardMedia
                                        className={classes.media}
                                        image={ourLadysInnProjectImage}
                                        title="Check out Our Lady's Inn project"
                                    />
                                    <CardContent style={{ marginLeft: "1em", marginRight: "1em", textAlign: "center" }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Our Lady's Inn
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <Card className={classes.root} style={{ marginTop: "1em", marginBottom: "1em" }}>
                                <CardActionArea href={`guides/become-a-developer`}>
                                    <CardMedia
                                        className={classes.media}
                                        image={thePalateSTLProjectImage}
                                        title="Check out The Palate STL project"
                                    />
                                    <CardContent style={{ marginLeft: "1em", marginRight: "1em", textAlign: "center" }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            The Palate STL
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        </div >
    );
}
