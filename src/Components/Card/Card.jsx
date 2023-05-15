import classnames from "classnames";
import pokeball from "../../assets/images/Poké_Ball_icon.svg.png";
import back from "../../assets/images/Simpsons/backcard.jpeg"

import "./Card.css";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={back} alt="pokeball" className="picture-back"  />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} className="picture-front" alt="pokeball"  />
      </div>
    </div>
  );
};

export default Card;
