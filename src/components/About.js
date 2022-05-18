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

              <Typography gutterBottom align="cen" >
                <p> Hi! My name is Santosh Tirumala. </p>
                <h7>
                  <u>Interests</u>{" "}
                </h7>
                <div>
                  <br />
                  <h8> • Computer graphics </h8>
                  <br />
                  <h8> • Open Source </h8>
                  <br />
                  <h8> • Tennis </h8>
                </div>
              </Typography>
            </Paper>
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid item xs={4} sm={4} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom align="center">
                <u>Skills &amp; Technologies</u>
              </Typography>
              <div>
                <ul>
                  <li>
                    <img src={java} width="22" height="22" />
                    Java
                  </li>
                  <li>
                    <img src={cee} width="22" height="22" />
                    C++
                  </li>
                  <li>
                    <img src={js} width="22" height="22" />
                    JavaScript
                  </li>
                  <li>
                    <img src={py} width="22" height="22" />
                    Python
                  </li>
                  <li>
                    <img src={ogl} width="40" height="22" />
                    OpenGL
                  </li>
                </ul>
              </div>
            </Paper>
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid item xs={4} sm={4} md={3}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom align="center">
                <u>Experience</u>
              </Typography>

              <div>
                <ul>

                  <li>Amazon SDE Intern</li>
                  <li>UF University Scholar</li>
                </ul>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default About;
