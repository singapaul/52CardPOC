import React, {useState} from "react";

const Card = () => {
  const [show, setShow] = useState(false);

  const text = show ? "FRONT" : "BACK";

  const onHandleClick = () => {
    setShow((show) => !show);
  };

  return (
    <div className="h-48 w-28 p-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4" onClick={onHandleClick}>
      <p>{text}</p>
    </div>
  );
};

export default Card;
