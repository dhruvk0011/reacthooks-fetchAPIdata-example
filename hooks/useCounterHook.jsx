import { useState } from "react";

function useCounterHook(initialCount = 0, value = 1) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((prevCount) => prevCount + value);
  const decrement = () => setCount((prevCount) => prevCount - value);
  const reset = () => setCount(0);
  // returning back parameters and functions.
  return [count, increment, decrement, reset];
}

export default useCounterHook;
