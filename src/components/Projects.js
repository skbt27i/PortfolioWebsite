
import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@material-ui/core';
import "./layout.css"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      height: '600px',
    },
  }));

  
const Projects= (props) => {
    const classes = useStyles();

   
    return (
    <div className={classes.root}>
    <Grid container spacing={0} 
  container
  direction="row"
  justify="space-between"
  alignItems="baseline">

        <Grid item xs={12}>
          <Paper className = {classes.paper}>
          <Typography variant="h5" gutterBottom align ="center">
           <u>Projects</u> 
            </Typography>
            <ul>
            <li> <a href="https://github.com/skbt27i/skbt27i.github.io">Personal Website </a> </li>
            <br />
            <li>Hair Salon Website </li>
            <br />
            <li> <a href="https://github.com/EddieFerro/thefloatingdutchman">The Floating Dutchman Python Game</a></li>
            <br />
            <li><a href="https://github.com/skbt27i/JavascriptGrapher"> Linear Regression Grapher </a> </li>
            <br />
            <li><a href="https://github.com/skbt27i/OpenGLProjects"> OpenGL Projects </a> </li>
            </ul>
            </Paper>
        </Grid>

  
    </Grid>

            
            
            
           
           
          
            </div>

    );
}

export default Projects
