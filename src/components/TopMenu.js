import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/SettingsInputAntennaSharp";
import { MenuItem } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
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

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Link to="/code" style={linkStyle}>
          <MenuItem>
            <Typography variant="h6" className={classes.title}>
              Profile
            </Typography>
          </MenuItem>
        </Link>
        <Link to="/radio" style={linkStyle}>
          <MenuItem>
            <Typography variant="h6" className={classes.title}>
              Radio
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem>
          <Typography variant="h6" className={classes.title}>
            Weather
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" className={classes.title}>
            Crypto
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" className={classes.title}>
            Hacks
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" className={classes.title}>
            Contact
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
  // return (
  //   <AppBar position="fixed" className={classes.appBar}>
  //     <Toolbar>
  //       <MenuItem>
  //         <Typography variant="h6" className={classes.title}>
  //           About
  //         </Typography>
  //       </MenuItem>
  //     </Toolbar>
  //   </AppBar>
  // );
};

export default TopMenu;
