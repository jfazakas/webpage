import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TopMenuAccountCircleCmp from "./TopMenuAccountCircleCmp";
import TopMenuButtonCmp from "./TopMenuButtonCmp";
import TopMenuListCmp from "./TopMenuListCmp";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(20),
    fontSize: 38,
    fontFamily: "Montserrat",
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
