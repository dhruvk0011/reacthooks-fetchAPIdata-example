import React, { useState, useEffect, useRef } from "react";

const UseRefExample = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <div>
      <input ref={inputRef} type='text' />
      <div>
        <p>Hook Timer - {timer}</p>
        <button onClick={() => clearInterval(intervalRef.current)}>
          Clear Hook Timer
        </button>
      </div>
    </div>
  );
};

export default UseRefExample;
