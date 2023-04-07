import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import CardGrid from "./Components/CardGrid/CardGrid";
import { createDeck } from "./utils/createDeck";

function App() {
  const shuffleDeck = () => {
    let newDeck = createDeck();
    setDeck(newDeck);
  };

  const [deck, setDeck] = useState(createDeck());
  const [matchedCards, setMatchedCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  // Give each card a show/hide state
  const showHide = () => {};

  const handleClick = (index) => {
    // console.log(deck);
    // console.log(index);
    index.isFlipped = !index.isFlipped;
    setDeck()
    console.log(index)
    // console.log(matchedCards);
    // console.log(flippedCards);
  };

  return (
    <div className="App">
      <h1>26 pairs POC</h1>
      <div className="card">
        <button onClick={showHide}>Assign show/hide</button>
        <button>selected card</button>
        <button className="m-10" onClick={shuffleDeck}>
          shuffle deck
        </button>
        <CardGrid>
          {deck.map((card) => {
            return (
              <Card
                key={card.rank.concat(card.suit).concat(Math.random())}
                handleCardClick={handleClick}
                card={card}
              />
            );
          })}
        </CardGrid>
      </div>
    </div>
  );
}

export default App;
