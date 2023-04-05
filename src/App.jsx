import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import CardGrid from "./Components/CardGrid/CardGrid";
import { cards, suits } from "./data/Cards";
import { shuffle } from "./utils/shuffle";

function App() {
  // initiate the deck
  var deck = [];
  suits.forEach(function (suit) {
    cards.forEach(function (rank) {
      deck.push({ suit: suit, rank: rank });
    });
  });
  const shuffleDeck = shuffle(deck);
  console.log(shuffleDeck);




  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>26 pairs POC</h1>
      <p className="text-red-500 mt-8">Hello world!</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <CardGrid>
          <Card />
          {deck.map((val) => {return <Card rank={val.rank} suit={val.suit}/>} )}
        </CardGrid>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
    </div>
  );
}

export default App;
