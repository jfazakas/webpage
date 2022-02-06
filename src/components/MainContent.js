import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Code from "../pages/code/Container";
import Radio from "../pages/radio/Radio";
import Crypto from "../pages/crypto/Crypto";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: "100%",
  },
}));

function Content(props) {
  switch (props.page) {
    case "code":
      return <Code />;
    case "radio":
      return <Radio />;
    case "crypto":
      return <Crypto />;
    default:
      return <Radio />;
  }
}

function MainContent(props) {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <Content page={props.page} />
      </div>
    </main>
  );
}

export default MainContent;
