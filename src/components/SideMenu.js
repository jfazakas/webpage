import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Account from "./Account";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import profilePic from "../assets/img/profile-pic.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `linear-gradient(#cfd9df,#e2ebf0)`,
    color: "grey",
  },
  bigAvatar: {
    margin: 30,
    width: 100,
    height: 100,
  },
}));

const SideMenu = () => {
  const classes = useStyles();

  return (
    <Drawer
      open={true}
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Avatar src={profilePic} className={classes.bigAvatar} />
      </Grid>
      <List>
        <Account />
        <SignIn />
        <SignOut />
      </List>
    </Drawer>
  );
};

export default SideMenu;
