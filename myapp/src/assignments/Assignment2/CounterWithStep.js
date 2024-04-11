
// 5.Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.import { useState } from "react";
import { useState } from "react";

export function CounterWithStep(){
    const[count, setCount] = useState(0);
    const[step, setStep] = useState(1);

    function handleIncrement(){
        setCount(count+step);
    }

    function handleDecrement(){
        setCount(count-step);
    }


    return(
        <div>
            <h1>Question-5: CounterWithStep</h1>
            <p>{count}</p>
            <input placeholder="define step count" name="step" type="number" onChange={(e)=> setStep(Number(e.target.value))}/>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}