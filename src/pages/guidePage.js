import React, { useState, useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

// sections of this Page
import Footer from "./footer";

// styles
import homePageStyles from "../styles/homePageStyles";

const useStyles = makeStyles(homePageStyles);

export default function GuidePage() {
    const classes = useStyles();

    const [data, setData] = useState([]);
    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, []);

    // this.props.match.params.id

    const Guide = data.map(item =>
        <div>
            <Card className={classes.root} style={{ marginTop: "1em", marginBottom: "1em" }}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={item.image}
                        title={item.imageAlt}
                    />
                    <CardContent style={{ marginLeft: "1em", marginRight: "1em" }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.introCopy[0]}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        className={classes.buttonPrimary + " " + classes.buttonLink}
                        id="buttonIconGithub"
                        aria-label="Read More"
                    >
                        Read More
                    </Button>
                    <p style={{ marginLeft: "1em", fontSize: ".9em" }}>
                        Last updated: {item.lastUpdated}
                    </p>
                </CardActions>
            </Card>
        </div>
    );

    return (
        <div className={classes.containerFluid}>
            <div className={classes.main}>
                <div className={classes.container} style={{ marginTop: "2em", marginBottom: "2em" }}>
                    <Grid container spacing={1} style={{ marginTop: "2em", marginBottom: "2em" }}>
                        <Grid item xs={12}>
                            {Guide}
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div>
        </div>
    );
}
