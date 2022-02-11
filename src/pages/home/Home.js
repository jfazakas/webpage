import React from "react";
import Header from "../home/Header";
import Content from "../home/Content";

const Home = () => {
  require("../../assets/css/styles.css");

  return (
    <div className="body">
      <Header />
      <Content />
    </div>
  );
};

export default Home;
