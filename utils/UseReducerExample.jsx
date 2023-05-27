import { useReducer } from "react";
const initialState = { firstCounter: 0 };
// action -- instruction to what to be done
const reducer = (curState, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: curState.firstCounter + action.value };
    case "decrement":
      return { firstCounter: curState.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return curState;
  }
};
function UseReducerExample() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='App'>
      <h3>Count - {count.firstCounter}</h3>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducerExample;
