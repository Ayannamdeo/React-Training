
// Create a functional component called Counter.
// Inside the component, use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// When the user clicks on the buttons, update the count state accordingly.import { useState } from "react";
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