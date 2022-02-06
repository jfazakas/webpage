import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Code from "../pages/code/Container";
import Radio from "../pages/radio/Radio";

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
  if (props.page === "code") {
    return <Code />;
  }

  if (props.page === "radio") {
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
