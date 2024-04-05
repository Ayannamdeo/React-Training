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