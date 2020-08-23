
import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@material-ui/core';
import "./layout.css"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { View, StyleSheet, Text, Document, Page } from '@react-pdf/renderer';

import file from './resume.pdf'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

      '& > *': {
        margin: theme.spacing(1),
      }
    },

    

  }));

  
const Resume= (props) => {
    const classes = useStyles();
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#FFF',
      padding: 10,
      fontSize: 10,
    },
    viewBox: {
      fontSize: 10,
      display: 'flex',
      alignItems: 'flex-start',
      border:'1px solid #000',
      flexDirection: 'row',
    },
  });
   
    return (
    <div className={classes.root}>

        <Typography variant="h5" gutterBottom align ="center"   >

           <u>Resume</u> 

        </Typography>

        <Grid container justify = "center">
        <Paper className = {classes.paper} width="20%">

        <Button variant="outlined"  color="primary" style={{justifyContent: 'center'}}> <a href="https://skbt27i.github.io/resume.pdf" target = "_blank" >Download Resume</a></Button>
        </Paper>

        </Grid>


<Grid container justify = "center">

<iframe src="https://skbt27i.github.io/resume.pdf" width="80%" height="700px">
    </iframe>
</Grid>
    </div>

    );
}

export default Resume
