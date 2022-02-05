import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";

const SignOut = () => {
  const text = "SignOut";

  return (
    <ListItem button key={text}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default SignOut;
