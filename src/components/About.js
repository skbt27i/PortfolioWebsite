import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@material-ui/core';
import "./layout.css"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import java from './java.png';
import js from './js.png';
import cee from './c.png';
import py from './py.png';
import ogl from './ogl.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      height: '600px',

    },
  }));

  
const About= (props) => {
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
          <Typography variant="h5" gutterBottom align ="center">
           <u>About</u> 
            </Typography>
            <Typography  gutterBottom align ="cen" marginRight = "800px">
            <p> Hi! My name is Santosh Tirumala and I am a rising fourth year Computer Science (B.S) student at the University of Florida.  </p>
            <h7><u>Interests</u> </h7>
            <br/>
            <h8> • Computer graphics </h8>
            <br />
            <h8> • Open Source </h8>
            <br />
            <h8> • Back-end development </h8>
            <br />
            <h8> • Guitar </h8>
            <br />
            <h8> • Video games </h8>
            <br />
            <h8> • Table tennis </h8>

            </Typography>
            </Paper>
        </Grid>

        <Grid item xs={3}>
        <Paper className = {classes.paper}>

          <Typography variant="h5" gutterBottom align ="center">
          <u>Skills &amp; Technologies</u>  
            </Typography>
            <ul>

        <li>
       <img src={java}  width="22" height="22" />
        Java
    </li>
    <li>
       <img src={cee} width="22" height="22"/>
       C++
    </li>
    <li>
       <img src={js} width="22" height="22"/>
        JavaScript
    </li>
    <li>
            <img src={py} width="22" height="22"/>
           Python
    </li>
    <li>
        <img src ={ogl} width="40" height="22"/>

        OpenGL
    </li>
    </ul>
           </Paper>
        </Grid>
        <Grid item xs={3}>
        <Paper className = {classes.paper}>

          <Typography variant="h5" gutterBottom align="center">
          <u>Experience</u>  
        </Typography>
        <ul>

    <li>
    Amazon SDE Intern
</li>
<li>
    UF University Scholar
</li>

       </ul>
       </Paper>
        </Grid>
    </Grid>

            
            
            
    
          
            </div>

    );
}

export default About
