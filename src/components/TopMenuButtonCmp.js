import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router-dom";
import SettingsInputAntennaIcon from "@mui/icons-material/SettingsInputAntenna";
// import MenuIcon from "@mui/icons-material/Menu";

const TopMenuButtonCmp = ({ classes }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
      onClick={onClickHandler}
    >
      {/* <SettingsInputAntennaIcon /> */}
      YO6GZI
    </IconButton>
  );
};

export default TopMenuButtonCmp;
