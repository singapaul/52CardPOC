import React from "react";
import reactkooh from "../../assets/react.svg";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import "./Card.css";

const Card = ({ card, flipped, matched, onClick }) => {
  const handleClick = () => {
    if (!flipped && !matched) {
      onClick(card);
      console.log("flip the card");
    } else {
      console.log("card already flipped");
    }
  };

  return (
    <>
      <CSSTransition
        in={!flipped}
        timeout={1000}
        classNames="front-face-transition"
      >
        <div
          className={classNames(
            "h-16 w-14 p-1 border border-gray-200 rounded-lg shadow dark:border-gray-700 flex justify-center content-center items-center card-container card-button"
          )}
          onClick={handleClick}
        >
          {flipped || matched ? null : <img src={reactkooh} alt="card front" />}

          {flipped || matched ? (
            <>
              <p>{card.suit}</p>
              <p>{card.rank}</p>
            </>
          ) : null}
        </div>
      </CSSTransition>

      {/* <div className="card-container">
          <button className="card-button" onClick={() => setFlipped(!flipped)}>
            <CSSTransition
              in={!flipped}
              timeout={1000}
              classNames="front-face-transition"
            >
              <div className="card-front">
                <p>front-side</p>
                <img src={reactkooh} alt="React Image" />
              </div>
            </CSSTransition>
            <CSSTransition
              in={flipped}
              timeout={1000}
              classNames="back-face-transition"
            >
              <div className="card-back">
                <p>{card.rank}</p>
                <p>{card.suit}</p>
              </div>
            </CSSTransition>
          </button>
        </div>
      </> */}
    </>
  );
};

export default Card;

// import React, { useState } from "react";
// import "./Card.css";

// const Card = ({ card, flipped=false, matched, onClick }) => {
//   // const [flipped2, setFlipped2] = useState(flipped);

//   // const handleCardClick = () => {
//   //   setFlipped(!flipped);
//   // };

//   const handleClick = () => {
//     if (!flipped && !matched) {
//       onClick(card);
//     } else {
//       console.log("card already flipped");
//     }
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className={` ${flipped ? "flip-hover" : ""} flip`}
//     >
//       <div className="flip-content">
//         <div className="flip-front">
//           <img
//             src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ94jU6AV0dBsw_xLO_GFEypOeXrwy3oEXym9I4wInlZrAsoFDQOyze1ZzE3XlKHfhC-SleN4mwrBMKCok"
//             alt="billMUrray"
//           />
//         </div>

//         <div className="flip-back">
//           <div className="transition-transform duration-1000 ease-in-out transform-gpu">
//             <strong>{card.suit}</strong>
//             <strong>{card.rank}</strong>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

// {
//   flipped || matched ? null : <img src={reactkooh} alt="card front" />;
// }
// {
//   flipped || matched ? (
//     <>
//       <p>{card.suit}</p>
//       <p>{card.rank}</p>
//     </>
//   ) : null;
// }
