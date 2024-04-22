/**
 * Create a React component named Counter that displays a number and two buttons, 
 * one for incrementing the number and another for decrementing it. 
 * Write tests using React Testing Library to ensure that the component behaves as expected.
 */
import React, { useState } from "react";

export function Counter(){
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h4>
        Counter is : {counter}
      </h4>
      <button
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter((prevCounter) => prevCounter - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};