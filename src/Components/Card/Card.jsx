import React from "react";
import reactkooh from "../../assets/react.svg";
import classNames from "classnames";

const Card = ({ card, flipped, matched, onClick }) => {
  const handleClick = () => {
    if (!flipped && !matched) {
      onClick(card);
    } else {
      console.log("card already flipped");
    }
  };

  const classthing = `card ${flipped ? "flipped" : ""} ${
    matched ? "matched" : ""
  }`;

  const classthing2 = flipped ? "border-blue-400" : "border-green-400";

  return (
    <div
      className={classNames(
        classthing,
        classthing2,
        "h-28 w-16 p-1 border border-gray-200 rounded-lg shadow dark:border-gray-700 flex justify-center content-center items-center"
      )}
      onClick={handleClick}
    >
      {flipped || matched ?  null: <img src={reactkooh} alt="card front" />}
      {flipped || matched ? (
        <>
          <p>{card.suit}</p>
          <p>{card.rank}</p>
        </>
      ) : null}
    </div>
  );
};

export default Card;
