
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

  
const Project= (props) => {
    const classes = useStyles();

   
    return (
    <div className={classes.root}>
    <Grid container spacing={0} 
  container
  direction="row"
  justify="space-between"
  alignItems="baseline">

        <Grid item xs={1}>
          <Paper className = {classes.paper}>
            <Typography gutterBottom align ="cen">
            <u>Projects</u> 
            </Typography>
            <ul>
            <li>Personal Website </li>
            <br />
            <li>Hair Salon Website </li>
            <br />
            <li>The Floating Dutchman Python Game </li>
            <br />
            <li> Linear Regression Grapher </li>
            <br />
            <li> Face Project </li>
            </ul>
            </Paper>
        </Grid>

  
    </Grid>

            
            
            
           
           
          
            </div>

    );
}

export default About
