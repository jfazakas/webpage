import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Code from "../pages/code/Code";
import Radio from "../pages/radio/Radio";
import Crypto from "../pages/crypto/Crypto";
import Home from "../pages/home/Home";
import LogInPage from "../authentication/pages/LogInPage";
import ScrollToTop from "./ScrollToTop";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(15),
  },
}));

const Page = (props) => {
  switch (props.page) {
    case "home":
      return <Home />;
    case "code":
      return <Code />;
    case "radio":
      return <Radio />;
    case "crypto":
      return <Crypto />;
    case "login":
      return <LogInPage />;
    default:
      return <Radio />;
  }
};

const MainContent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Page page={props.page} />
      <ScrollToTop />
    </div>
  );
};

export default MainContent;
