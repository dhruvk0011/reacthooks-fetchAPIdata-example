import React from "react";
import useCounterHook from "./useCounterHook";
const CounterTwo = () => {
  const [count, increment, decrement, reset] = useCounterHook();
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterTwo;
