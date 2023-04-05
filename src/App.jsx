import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>26 pairs POC</h1>
      <p className="text-red-500 mt-8">Hello world!</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Card/>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
    </div>
  );
}

export default App;
