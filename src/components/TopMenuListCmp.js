import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import RadioIcon from "@mui/icons-material/Radio";
import TerminalIcon from "@mui/icons-material/Terminal";
import CottageIcon from "@mui/icons-material/Cottage";
import { MenuItem } from "@material-ui/core";
import { topMenuItems } from "../config/topMenuItems";

const getIconByIndex = (index) => {
  switch (index) {
    case 0:
      return <CottageIcon />;
    case 1:
      return <RadioIcon />;
    case 2:
      return <TerminalIcon />;
    default:
      return <></>;
  }
};
const TopMenuListCmp = ({ classes }) => {
  return (
    <>
      {topMenuItems.map(
        (item, index) =>
          item.enabled && (
            <Link to={item.url} className={classes.menuItems} key={index}>
              <MenuItem key={index}>
                <Typography variant="h6" className={classes.menuItemsTitle}>
                  {getIconByIndex(index)} {item.name}
                </Typography>
              </MenuItem>
            </Link>
          )
      )}
    </>
  );
};

export default TopMenuListCmp;
