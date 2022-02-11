import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TopMenuAccountCircleCmp from "./TopMenuAccountCircleCmp";
import TopMenuButtonCmp from "./TopMenuButtonCmp";
import TopMenuListCmp from "./TopMenuListCmp";

const useStyles = makeStyles((theme) => ({
  menuItemsTitle: {
    "@media (max-width: 750px)": {
      fontSize: 14,
    },
  },
  menuItems: {
    textDecoration: "none",
    display: "block",
    color: "white",
    paddingLeft: 20,
    "@media (max-width: 750px)": {
      paddingLeft: 0,
      fontSize: 14,
    },
  },
  menuButton: {
    marginRight: theme.spacing(20),
    fontSize: 38,
    fontFamily: "Montserrat",
    "@media (max-width: 750px)": {
      marginRight: theme.spacing(0),
      fontSize: 14,
    },
  },
  accountCircle: {
    marginLeft: "auto",
  },
}));

const TopMenu = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <TopMenuButtonCmp classes={classes} />
        <TopMenuListCmp classes={classes} />
        <TopMenuAccountCircleCmp classes={classes} />
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
