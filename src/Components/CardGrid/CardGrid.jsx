import React, { useState } from "react";

const CardGrid = ({ children }) => {



  return (
    <div className="grid grid-flow-row grid-cols-4 gap-1 text-neutral-600 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-4">
      {children}
    </div>
  );
};

export default CardGrid;
