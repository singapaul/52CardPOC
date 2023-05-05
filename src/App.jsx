import { useEffect, useState, useRef } from "react";
import { Button } from "@material-ui/core";
import Card from "./Components/Card/Card";
import { uniqueElementsArray } from "./data/Simpsons";
import { shuffle } from "./utils/shuffle";
import DialogComp from "./Components/Dialog/Dialog";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

export default function App() {
  const [cards, setCards] = useState(
    shuffle.bind(null, uniqueElementsArray.concat(uniqueElementsArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const openAboutModal = () => {
    setShowAboutModal(true);
  };

  const closeAboutModal = () => {
    setShowAboutModal(false);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);
  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);
  // Milliseconds calculation
  const milliseconds = time % 100;

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    stopTimer();
    reset();
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffle(uniqueElementsArray.concat(uniqueElementsArray)));
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === uniqueElementsArray.length) {
      setShowModal(true);
      stopTimer();
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    // Each time a second card is selected this function is called from a useEffect
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (index) => {
    startTimer();
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);

      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  return (
    <div className="flex flex-col align items-center">
      <Header/>
      <section>
        <div className="grid grid-flow-row grid-cols-4 p-4 gap-2 justify-items-center sm:grid-cols-8 max-w-5xl">
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                card={card}
                index={index}
                isDisabled={shouldDisableAllCards}
                isInactive={checkIsInactive(card)}
                isFlipped={checkIsFlipped(index)}
                onClick={handleCardClick}
              />
            );
          })}
        </div>
      </section>
      {/* Stats */}
      <div className="flex gap-8 m-8">
        <div className="font-mono text-xl font-bolds">
          <span className="font-mono text-xl font-bold">Moves:</span> {moves}
        </div>
        <div className="moves">
          <div className="font-mono text-xl font-bold">
            Time: {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
          </div>
        </div>
        {localStorage.getItem("bestScore") && (
          <div className="font-mono text-xl font-bold">
            <span className="bold">Best Score:</span> {bestScore}
          </div>
        )}
      </div>
      {/* Stats */}
      <section className="flex mt-5 gap-8">
        <div className="restart">
          <Button onClick={openAboutModal} color="primary" variant="contained">
            About
          </Button>
        </div>
        <div className="restart">
          <Button onClick={handleRestart} color="primary" variant="contained">
            Restart
          </Button>
        </div>
      </section>

      <DialogComp
        title={"About the game!"}
        showModal={showAboutModal}
        buttonLabel={"Close"}
        buttonAction={closeAboutModal}
      >
        <div>
          <p>
            Select two cards with same content consequtively to make them
            vanish. Race the clock and beat your friends
          </p>
        </div>
      </DialogComp>

      <DialogComp
        title="You completed the challenge"
        showModal={showModal}
        buttonLabel={"restart"}
        buttonAction={handleRestart}
      >
        You completed the game in {moves} moves. Your best score is {bestScore}{" "}
        moves and in {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </DialogComp>
      <Footer />
    </div>
  );
}
