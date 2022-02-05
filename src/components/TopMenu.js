import React from "react";
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
        <MenuItem>
          <Typography variant="h6" className={classes.title}>
            Profile
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" className={classes.title}>
            Radio
          </Typography>
        </MenuItem>
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
