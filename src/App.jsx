import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    if (count < 20) {
      setCount(count + 1);
    }
  }
  function decrementCount() {
    if (count >= 1) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <div>
        <h1>Counter</h1>
        <h1>Counter Value :- {count}</h1>

        <button onClick={incrementCount}>Increment value</button>
        <button onClick={decrementCount}>Decrement value</button>
        <button onClick={() => setCount(0)}>Reset Counter</button>
      </div>
    </>
  );
}

export default App;
