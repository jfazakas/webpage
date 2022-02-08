// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";
import MainContent from "../components/MainContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const content = props.content || "radio";

  return (
    <div className={classes.root}>
      <TopMenu />
      {/* <SideMenu /> */}
      <MainContent page={content} />
      <Footer />
    </div>
  );
};

export default Home;
