import React from "react";
import Header from "./Header";
import Content from "./Content";

const Crypto = () => {
  require("../../assets/css/styles.css");

  return (
    <div className="body">
      <Header />
      <Content />
    </div>
  );
};

export default Crypto;
