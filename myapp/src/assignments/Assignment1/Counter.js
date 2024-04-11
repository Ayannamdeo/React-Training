import { useState } from 'react';

export function Counter(props){
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count+1);
    }
    function handleDecrement() {
        setCount(count-1);
    }

    return (
        <>
        <h2>{count}</h2>
        <button onClick={handleIncrement}>
            Increment
        </button>
        <button onClick={handleDecrement}>
            Decrement
        </button>
        </>
    );
}