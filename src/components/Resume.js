
import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@material-ui/core';
import "./layout.css"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Document, Page } from 'react-pdf';
import Button from '@material-ui/core/Button';

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

   
    return (
    <div className={classes.root}>
        <Typography variant="h5" gutterBottom align ="center"   >
           <u>Resume</u> 
        </Typography>
        <Grid container justify = "center">

        <Button variant="outlined"  color="primary" style={{justifyContent: 'center'}}> <a href="https://skbt27i.github.io/resume.pdf" target = "_blank" >Download Resume</a></Button>
        </Grid>

<Grid container justify = "center">

            <Document
        file={file}
        
      >
        <Page pageNumber={1}
      
          />
      </Document>
</Grid>
    </div>

    );
}

export default Resume
