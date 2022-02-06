import React from "react";
import Header from "./Header";
import Projects from "./Projects";

const Container = () => {
  require("./css/styles.css");

  return (
    <div className="body">
      <Header />
      <Projects />
    </div>
  );
};

export default Container;
