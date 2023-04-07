import React, { useState } from "react";
import classNames from "classnames";
import card from "../../assets/card.jpeg";

const Card = ({ rank, suit }) => {
  const [show, setShow] = useState(false);

  const onHandleClick = () => {
    setShow((show) => !show);
  };

  const cardColor =
    suit === "red" && show == true
      ? "dark:bg-red-200"
      : suit === "black" && show == true
      ? "dark:bg-gray-800"
      : "dark:bg-grey-200";

  return (
    <div
      className={classNames(
        "h-28 w-16 p-1 border border-gray-200 rounded-lg shadow dark:border-gray-700",
        cardColor
      )}
      onClick={onHandleClick}
    >
      {show ? null : <image src={card} />}
      {show ? <p>{suit}</p> : null}
      {show ? <p>{rank}</p> : null}
    </div>
  );
};

export default Card;
