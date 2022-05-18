// from https://javascript.works-hub.com/learn/how-to-create-a-responsive-navbar-using-material-ui-and-react-router-f9a01
import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import scrollTo from "gatsby-plugin-smoothscroll";
import MenuIcon from "@material-ui/icons/Menu";


function Mobile() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button color="inherit" onClick={() => scrollTo("#About")}>
                About
              </Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button color="inherit" onClick={() => scrollTo("#Projects")}>
                Projects
              </Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button color="inherit" onClick={() => scrollTo("#Resume")}>
                Resume
              </Button>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default Mobile;
