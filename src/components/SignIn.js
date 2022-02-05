import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LoginIcon from "@mui/icons-material/Login";

const SignIn = () => {
  const text = "SignIn";

  return (
    <ListItem button key={text}>
      <ListItemIcon>
        <LoginIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default SignIn;
