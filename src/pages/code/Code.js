import React from "react";
import Header from "./Header";
import Projects from "./Projects";

const Code = () => {
  require("../../assets/css/styles.css");

  return (
    <div className="body">
      <Header />
      <Projects />
    </div>
  );
};

export default Code;
