import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { MenuItem } from "@material-ui/core";
import { topMenuItems } from "../config/topMenuItems";

const linkStyle = {
  textDecoration: "none",
  display: "block",
  color: "white",
};

const TopMenuListCmp = ({ classes }) => {
  return (
    <>
      {topMenuItems.map((item, index) => (
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
};

export default TopMenuListCmp;
