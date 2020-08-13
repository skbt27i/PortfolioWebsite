import React from 'react';
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Grid from '@material-ui/core/Grid';


function  HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
    const classes = useStyles();

  return(
  <React.Fragment>
  <CssBaseline />
  <HideOnScroll {...props}>
    <AppBar>
      <Toolbar>
        <Button color="inherit" onClick={() => scrollTo('#begin')}>
        <Typography variant="h8" style={{display: 'inline-block'}} >Home</Typography>
        </Button>
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">

        <Button color="inherit" onClick={() => scrollTo('#About')}>About</Button>
        <Button color="inherit" onClick={() => scrollTo('#Projects')}>Projects</Button>
        <Button color="inherit" onClick={() => scrollTo('#Resume')}>Resume</Button>
        </Grid>


      </Toolbar>
    </AppBar>
  </HideOnScroll>
  <Toolbar />
</React.Fragment>
);
            }



