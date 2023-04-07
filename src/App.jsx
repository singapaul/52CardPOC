import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import { createDeck } from "./utils/createDeck";

const App = () => {
  const [cards, setDeck] = useState(createDeck());
  const [matchedCards, setMatchedCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleCardClick = (card) => {
    if (flippedCards.length === 0) {
      setFlippedCards([card]);
    } else if (flippedCards.length === 1) {
      if (flippedCards[0].id === card.id) {
        // Match found
        setMatchedCards([...matchedCards, flippedCards[0], card]);
        setFlippedCards([]);
      } else {
        // No match, flip cards back after a delay
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      // All cards matched, game over
      setGameOver(true);
    }
  }, [matchedCards, cards]);

  const resetGame = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>26 pairs POC</h1>
      <div>
        {gameOver ? (
          <div>
            <h2>Congratulations! You've won!</h2>
            <button onClick={resetGame}>Play Again</button>
          </div>
        ) : (
          <div>
            <h2>Matched Pairs: {matchedCards.length / 2}</h2>
            <div className="grid grid-flow-row grid-cols-4 gap-3">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  flipped={flippedCards.includes(card)}
                  matched={matchedCards.includes(card)}
                  onClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
