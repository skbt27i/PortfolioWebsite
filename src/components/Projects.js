
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

        <Grid item xs={3}>
          <Paper className = {classes.paper}>
            <Typography gutterBottom align ="cen">
            <h7><u>Projects</u> </h7>
            <br/>
            <h8>Personal Website </h8>
            <br />
            <h8>Hair Salon Website </h8>
            <br />
            <h8>The Floating Dutchman Python Game </h8>
            <br />
            <h8> Linear Regression Grapher </h8>
            <br />
            <h8> Face Project </h8>

            </Typography>
            </Paper>
        </Grid>

  
    </Grid>

            
            
            
           
           
          
            </div>

    );
}

export default About
