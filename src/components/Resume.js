
import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@material-ui/core';
import "./layout.css"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Document, Page } from 'react-pdf';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      height: '600px',

    },
  }));

  
const Resume= (props) => {
    const classes = useStyles();

   
    return (
    <div className={classes.root}>
     Resume
      <Document
        file="TODO"
      >
      </Document>
    
    </div>

    );
}

export default About
