import React from "react";
import { Typography } from "@material-ui/core";
import "./layout.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import java from "../images/java.png";
import js from "../images/js.png";
import cee from "../images/c.png";
import py from "../images/py.png";
import ogl from "../images/ogl.png";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',   
    flexGrow: 1,
    minHeight: '100vh', 
    flexDirection: 'column',
    width: '100%', 
    margin: 0,
    padding: 0,
  },
  container: {
    flexGrow: 1,
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height: '100%',
  },
  image: {
    width: 24,
    height: 24,
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container direction="column" spacing={3} className={classes.container}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                <u>About</u>
              </Typography>
              <Typography variant="body1">
                Hi! My name is Santosh Tirumala.
                <br />
                <br />
                <u>Interests</u>
                <div>
                  Computer graphics
                  <br />
                  Open Source
                  <br />
                  Tennis
                </div>
              </Typography>
            </Paper>
          </Grid>

          <Divider className={classes.divider} />

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                <u>Skills</u>
              </Typography>
              <Typography variant="body1">
                <div>
                  <img src={java} className={classes.image} alt="Java" />
                  Java
                  <br />
                  <img src={cee} className={classes.image} alt="C++" />
                  C++
                  <br />
                  <img src={js} className={classes.image} alt="JavaScript" />
                  JavaScript
                  <br />
                  <img src={py} className={classes.image} alt="Python" />
                  Python
                  <br />
                  <img src={ogl} className={classes.image} alt="OpenGL" />
                  OpenGL
                </div>
              </Typography>
            </Paper>
          </Grid>

          <Divider className={classes.divider} />

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom>
                <u>Experience</u>
              </Typography>
              <Typography variant="body1">
                Amazon SDE, Alexa Speech
                <br />
                UF University Scholar
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default About;
