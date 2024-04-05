import { useState } from "react";

export function Counter2(){
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(count + 1);
    }
    function handleDecrement(){
        setCount(count - 1);
    }
    return(
      <div>
        <h1>Question-1: Counter</h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      </div>  
    );
}