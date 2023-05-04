import React from "react";

const CardGrid = ({ children }) => {
  return <div className="grid grid-flow-row grid-cols-6 gap-2">{children}</div>;
};

export default CardGrid;
