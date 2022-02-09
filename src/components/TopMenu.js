import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/SettingsInputAntennaSharp";
import { MenuItem } from "@material-ui/core";
import topMenuItems from "../config/topMenuItems";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  const linkStyle = {
    textDecoration: "none",
    display: "block",
    color: "white",
  };

  const IconButtonCmp = () => {
    return (
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
    );
  };

  const TopMenuList = ({ items }) => (
    <>
      {items.map((item, index) => (
        <Link to={item.url} style={linkStyle} key={index}>
          <MenuItem key={index}>
            <Typography variant="h6" className={classes.title}>
              {item.name}
            </Typography>
          </MenuItem>
        </Link>
      ))}
    </>
  );

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <IconButtonCmp />
        <TopMenuList items={topMenuItems} />
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
