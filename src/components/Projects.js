
import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@material-ui/core';
import "./layout.css"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      height: '600px',
    },
  }));
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  
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
       
            <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="https://github.com/skbt27i/skbt27i.github.io">
          <ListItemText primary="Personal Website" />
        </ListItemLink>
        <ListItem button>
          <ListItemText primary="Hair Salon Website" />
        </ListItem>
        <ListItemLink href="https://github.com/EddieFerro/thefloatingdutchman">
          <ListItemText primary="The Floating Dutchman Python Game" />
        </ListItemLink>
        <ListItemLink href="https://github.com/skbt27i/JavascriptGrapher">
          <ListItemText primary="Linear Regression Grapher" />
        </ListItemLink>
        <ListItemLink href="https://github.com/skbt27i/OpenGLProjects">
          <ListItemText primary="OpenGL Projects" />
        </ListItemLink>
      </List>
            </Paper>
        </Grid>

  
    </Grid>

            
            
            
           
           
          
            </div>

    );
}

export default Projects
