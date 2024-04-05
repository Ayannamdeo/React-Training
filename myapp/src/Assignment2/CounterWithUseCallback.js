import { useCallback, useState } from "react";

export function CounterWithUseCallback(){
    return(
        <div>
            <h1>Question-13: CounterWithUseCallback</h1>
            <Parent />
        </div>
    );
}

function Parent(){
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(
      () => setCount((prev) => prev + 1),
      []
    );

    return(
        <div>
            <h2>--- Inside Parent Component ---</h2>
            <Child handleIncrement={handleIncrement} reset={()=>setCount(0)} count={count}/>
        </div>
    );
}

function Child({handleIncrement, reset, count}){
    return (
        <div>
            <h3>--- Inside Child Component ---</h3>
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment count</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}