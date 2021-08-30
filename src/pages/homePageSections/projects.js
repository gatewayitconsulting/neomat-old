import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
// Styles
import projectsStyles from "../../styles/projectsStyles.js";

const useStyles = makeStyles(projectsStyles);

export default function ProjectsSection() {
  const classes = useStyles();
  return (
    <div className={classes.textCenter}>
        <Grid container spacing={1} >
            <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            foo
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.mxAuto}>
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            foo
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.mxAuto}>
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            foo
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.mxAuto}>
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            foo
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.mxAuto}>
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}