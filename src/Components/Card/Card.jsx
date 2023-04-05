import React, { useState } from "react";
import classNames from "classnames";

const Card = ({ rank, suit }) => {
  const [show, setShow] = useState(false);

  const text = show ? "FRONT" : "BACK";

  const onHandleClick = () => {
    setShow((show) => !show);
  };

  const cardColor = suit === "red" ? "dark:bg-red-200" : "dark:bg-gray-800";

  return (
    <div
      className={classNames(
        "h-48 w-28 p-1 border border-gray-200 rounded-lg shadow dark:border-gray-700 m-4",
        cardColor
      )}
      onClick={onHandleClick}
    >
      <p>{text}</p>
      <p>{rank}</p>
      <p>{suit}</p>
    </div>
  );
};

export default Card;
