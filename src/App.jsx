import { useState } from "react";
import caraLuis from "./assets/luis.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={caraLuis}
            // height="50px"
            // width="50px"
            className="logo"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Luis culo gordo</h1>
      <p className="read-the-docs">Tonto el que lo lea</p>
    </div>
  );
}

export default App;
