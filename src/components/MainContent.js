import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Code from "../pages/code/Code";
import Radio from "../pages/radio/Radio";
import Crypto from "../pages/crypto/Crypto";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(15),
  },
}));

const Page = (props) => {
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
};

const MainContent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Page page={props.page} />
    </div>
  );
};

export default MainContent;
