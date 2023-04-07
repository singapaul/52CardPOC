import React, { useEffect, useState } from "react";
import classNames from "classnames";


const Card = ({ card, handleCardClick }) => {
  const [show, setShow] = useState(false);

useEffect(() => {setShow(!show)}, [])

  const cardColor = card.isFlipped ? "dark:bg-grey-200" : "dark:bg-gray-800"
  return (
    <div
      onClick={() => handleCardClick(card)}
      className={classNames(
        "h-28 w-16 p-1 border border-gray-200 rounded-lg shadow dark:border-gray-700",
        cardColor
      )}
    >
      {show ? <p>{card.suit}</p> : null}
      {show ? <p>{card.rank}</p> : null}
    </div>
  );
};

export default Card;
