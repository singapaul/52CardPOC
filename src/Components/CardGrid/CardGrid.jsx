import React, { useState } from "react";

const CardGrid = ({ children }) => {



  return (
    <div className="grid grid-flow-row grid-cols-4 gap-3">
      {children}
    </div>
  );
};

export default CardGrid;
