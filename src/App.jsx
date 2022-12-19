import { useState } from "react";
import caraLuis from "./assets/luis.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="#" target="_blank">
          <img src={caraLuis} className="logo" alt="React logo" />
        </a>
      </div>

      <h1>Luis culo gordo</h1>
    </div>
  );
}

export default App;
