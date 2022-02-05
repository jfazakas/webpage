import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";

const Account = () => {
  const text = "Account";

  return (
    <ListItem button key={text}>
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default Account;
