
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
	<ListItem button component="a" href="https://github.com/skbt27i/skbt27i.github.io">
          <ListItemText primary="Personal Website" />
	</ListItem>
        <ListItem button>
          <ListItemText primary="Hair Salon Website" />
        </ListItem>
        <ListItem button component="a" href="https://github.com/EddieFerro/thefloatingdutchman">
          <ListItemText primary="The Floating Dutchman Python Game" />
	</ListItem>
        <ListItem button component="a" href="https://github.com/skbt27i/JavascriptGrapher">
          <ListItemText primary="Linear Regression Grapher" />
	</ListItem>
	<ListItem button component="a"  href="https://github.com/skbt27i/OpenGLProjects">
        
          <ListItemText primary="OpenGL Projects" />
       
</ListItem>
      </List>
            </Paper>
        </Grid>

  
    </Grid>

            
            
            
           
           
          
            </div>

    );
}

export default Projects
