import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import scrollTo from "gatsby-plugin-smoothscroll";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import {
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Mobile from "./mobile";
function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
  hov: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles();
  const mobileDetected = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Button color="inherit" onClick={() => scrollTo("#begin")}>
              <Typography variant="h8" style={{ display: "inline-block" }}>
                Home
              </Typography>
            </Button>
         
            <Grid container justify="space-evenly" direction="row">
              <GitHubIcon
                style={{ fill: "#000000" }}
                onClick={() =>
                  (window.location.href = "https://github.com/skbt27i")
                }
                className={classes.hov}
              />

              <LinkedInIcon
                style={{ fill: "#000000" }}
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/santoshkrishna-tirumala/")
                }
                className={classes.hov}
              />

              <MailOutlineIcon
                style={{ fill: "#000000" }}
                onClick={() =>
                  (window.location.href = "mailto:skbt27i@gmail.com")
                }
                className={classes.hov}
              />
            </Grid>

           {mobileDetected ? (
                <Mobile />
              ) : (
            <Grid
              container
              alignItems="flex-start"
              justify="flex-end"
              direction="row"
            >
              <Button color="inherit" onClick={() => scrollTo("#About")}>
                About
              </Button>
              <Button color="inherit" onClick={() => scrollTo("#Projects")}>
                Projects
              </Button>
              <Button color="inherit" onClick={() => scrollTo("#Resume")}>
                Resume
              </Button>
            </Grid>)}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
