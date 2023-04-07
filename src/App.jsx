import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import CardGrid from "./Components/CardGrid/CardGrid";
import { cards, suits } from "./data/Cards";
import { shuffle } from "./utils/shuffle";

function App() {
  const createDeck = () => {
    let deck = [];
    suits.forEach(function (suit) {
      cards.forEach(function (rank) {
        deck.push({ suit: suit, rank: rank });
      });
    });
    return shuffle(deck);
  };

  const shuffleDeck = () => {
    let newDeck = createDeck()
    setDeck(newDeck);
  };

  const [deck, setDeck] = useState(createDeck());

  

  return (
    <div className="App">
      <h1>26 pairs POC</h1>
      <div className="card">
        <button className="m-10" onClick={shuffleDeck}>
          shuffle deck
        </button>
        <CardGrid>
          {deck.map((val) => {
            return <Card rank={val.rank} suit={val.suit} />;
          })}
        </CardGrid>
      </div>
    </div>
  );
}

export default App;
