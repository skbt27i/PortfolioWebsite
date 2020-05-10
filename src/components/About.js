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
            <p> Hi! My name is Santosh Tirumala and I am a rising third year Computer Science (B.S) student at the University of Florida.  </p>
            <p> One of my favorite things to do at the university is play table tennis every Friday night.</p>
            <p>I love programming, especially graphics, and am looking forward to learning more!</p>
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

            </Typography>
            </Paper>
        </Grid>
        <Grid item xs={3}>
        <Paper className = {classes.paper}>

          <Typography variant="h5" gutterBottom align ="center">
         <u>Skills &amp; Technologies</u>  
            </Typography>
            <ul>

    <li>Java
        <img src={java}  width="22" height="22" />
    </li>
    <li>C++
        <img src={cee} width="22" height="22"/>
    </li>
    <li>JavaScript
        <img src={js} width="22" height="22"/>
    </li>
    <li>Python
        <img src={py} width="22" height="22"/>
    </li>
    <li>
        OpenGL
        <img src ={ogl} width="40" height="22"/>
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
    UF University Scholar
</li>
<li>
    CNH Industrial Software Engineering Intern (Cancelled due to Coronavirus)
</li>
       </ul>
       </Paper>
        </Grid>
    </Grid>

            
            
            
           
           
          
            </div>

    );
}

export default About
