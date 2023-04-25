import React, { useState } from "react";

import Button from './components/Button';

import './style.css';


function App() {
  const [count, setCount] = useState(0);
  let incrementCount = () => {
    setCount(count + 1);
  };
  let decrementCount = () => {
    setCount(count - 1)
  };
  let resetCount = () => {
   setCount(0);
  }

  return (
    <div className="app">
      <p>Count: {count}</p>
      <div className="buttons">
        <Button title={"Decrease Count"} action={decrementCount} />

        <Button title={"Increase Count"} action={incrementCount} />

        <Button title={"Reset Count"} action={resetCount} />
      </div>
    </div>
  );
}

export default App;