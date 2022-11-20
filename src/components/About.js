import React, { useState, useEffect, useRef } from "react";
import { Typography } from "@material-ui/core";
import "./layout.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import java from "./java.png";
import js from "./js.png";
import cee from "./c.png";
import py from "./py.png";
import ogl from "./ogl.png";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    height: "100%"
  },
  stretch: { height: "100%" },

}));

const About = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
          spacing={0}
        >
          <Grid item xs={3} sm={4} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom align="center">
                <u>About</u>
              </Typography>

              <Typography variant="h8">
                <p> Hi! My name is Santosh Tirumala. </p>
                <h7>
                  <u>Interests</u>{" "}
                </h7>
                <div>
                  <br />
                  Computer graphics 
                  <br />
                  <br />
                  Open Source 
                  <br />
                  <br />
                   Tennis 
                </div>
              </Typography>
            </Paper>
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid item xs={4} sm={4} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom align="center">
                <u>Skills</u>
              </Typography>
              <Typography gutterBottom align="center">
                  <h8>
                    <img src={java} width="22" height="22" />
                    Java
                  </h8>
                  <br />
                  <br />
                  <h8>
                    <img src={cee} width="22" height="22" />
                    C++
                  </h8>
                  <br />
                  <br />
                  <h8>
                    <img src={js} width="22" height="22" />
                    JavaScript
                  </h8>
                  <br />
                  <br />
                  <h8>
                    <img src={py} width="22" height="22" />
                    Python
                  </h8>
                  <br />
                  <br />
                  <h8>
                    <img src={ogl} width="40" height="22" />
                    OpenGL
                  </h8>
              </Typography>
            </Paper>
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid item xs={4} sm={3} md={3}>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom align="center">
              <u>Experience</u>
              </Typography>

              <Typography gutterBottom align="center">
                  Amazon SDE1, Alexa Speech
                  <br />
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
