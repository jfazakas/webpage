import React from "react";

const Header = () => {
  return (
    <div className="content-wrap body">
      <h2 className="h2">Cryptocurrencies</h2>
      <p className="indent">
        A general listing of cryptocurrencies from coinstats api documented{" "}
        <a
          href="https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest"
          target="blank"
        >
          <strong>here</strong>.
        </a>
      </p>
    </div>
  );
};

export default Header;
