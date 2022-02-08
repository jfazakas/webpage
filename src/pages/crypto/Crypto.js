import React from "react";
import CryptoHeader from "./CryptoHeader";
import CryptoTable from "./CryptoTable";

const Crypto = () => {
  require("../../assets/css/styles.css");

  return (
    <div className="body">
      <CryptoHeader />
      <CryptoTable />
    </div>
  );
};

export default Crypto;
