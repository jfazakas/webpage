import React from "react";

const HeaderFilter = ({ column }) => {
  const filter = column.canFilter ? column.render("Filter") : null;

  return <div>{filter}</div>;
};

export default HeaderFilter;
