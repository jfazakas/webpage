import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/SettingsInputAntennaSharp";

const TopMenuButtonCmp = ({ classes }) => {
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

export default TopMenuButtonCmp;
