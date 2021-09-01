import React from 'react';
// import React, { useState, useEffect } from 'react';
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
// import ContentTabs from "../../components/ContentTabs.js";

import guideImage from "../../assets/imgs/entry-developer.jpg";

// Styles
import guidesPageStyles from "../../styles/guidesPageStyles.js";
// import { render } from '@testing-library/react';

const useStyles = makeStyles(guidesPageStyles);

export default function GuidesMainSection() {
    const classes = useStyles();

    // const [data, setData] = useState([]);
    // const getData = () => {
    //     fetch('data.json'
    //         , {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             console.log(myJson);
    //             setData(myJson)
    //         });
    // }
    // useEffect(() => {
    //     getData()
    // }, []);

    //   const Guide = data.map(item =>
    //     <div>
    //         <Card className={classes.root} style={{ marginTop: "1em", marginBottom: "1em" }} key={item.id}>
    //             <CardActionArea href={`/Guides/${item.id}`}>
    //                 <CardMedia
    //                     className={classes.media}
    //                     image={item.image}
    //                     title={item.imageAlt}
    //                 />
    //                 <CardContent style={{ marginLeft: "1em", marginRight: "1em" }}>
    //                     <Typography gutterBottom variant="h5" component="h2">
    //                         {item.title}
    //                     </Typography>
    //                     <Typography variant="body2" color="textSecondary" component="p">
    //                         {item.introCopy[0]}
    //                     </Typography>
    //                 </CardContent>
    //             </CardActionArea>
    //             <CardActions>
    //                 <Button
    //                     className={classes.buttonPrimary + " " + classes.buttonLink}
    //                     id="buttonIconGithub"
    //                     aria-label="Read More"
    //                     href={`/Guides/${item.id}`}
    //                 >
    //                     Read More
    //                 </Button>
    //                 <p style={{ marginLeft: "1em", fontSize: ".9em" }}>
    //                     Last updated: {item.lastUpdated}
    //                 </p>
    //             </CardActions>
    //         </Card>
    //     </div>
    //   );

    // return (
    //     <div className={classes.container} style={{ marginTop: "2em", marginBottom: "2em" }}>
    //         <Grid container spacing={1} style={{ marginTop: "2em", marginBottom: "2em" }}>
    //             {/* <Grid item xs={12}>
    //                 <ContentTabs
    //                     alignCenter
    //                     tabs={[
    //                     {
    //                         tabButton: "All",
    //                         tabContent: ""
    //                     },
    //                     {
    //                         tabButton: "Developer",
    //                         tabContent: ""
    //                     },
    //                     {
    //                       tabButton: "Agile",
    //                       tabContent: ""
    //                     },
    //                     {
    //                         tabButton: "Low Hanging Fruit",
    //                         tabContent: ""
    //                     }
    //                     ]}
    //                 />
    //             </Grid> */}
    //             <Grid item xs={12} key="1">
    //                 {Guide}
    //             </Grid>
    //         </Grid>
    //     </div>
    // );
    return (
        <div className={classes.container} style={{ marginTop: "2em", marginBottom: "2em" }}>
            <Grid container spacing={1} style={{ marginTop: "2em", marginBottom: "2em" }}>
                <Grid item xs={12}>
                    <div>
                        <Card className={classes.root} style={{ marginTop: "1em", marginBottom: "1em" }}>
                            <CardActionArea href={`guides/become-a-developer`}>
                                <CardMedia
                                    className={classes.media}
                                    image={guideImage}
                                    title="Learn how to become a developer"
                                />
                                <CardContent style={{ marginLeft: "1em", marginRight: "1em" }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Want to become a website developer?
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        To become a website developer, you must understand the basic building blocks that make up a website and how they function. Skills you must learn include HTML5, CSS, and JavaScript.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    className={classes.buttonPrimary + " " + classes.buttonLink}
                                    id="buttonIconGithub"
                                    aria-label="Read More"
                                    href={`guides/become-a-developer`}
                                >
                                    Read More
                                </Button>
                                <p style={{ marginLeft: "1em", fontSize: ".9em" }}>
                                    Last updated: 08/29/2021
                                </p>
                            </CardActions>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}