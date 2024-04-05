import { useState } from "react"

export function RandomNumberGenerator(){
    const [randonNumber, setRandomNumber] = useState(41);

    function handleClick(){
        const newrandom = Math.floor(Math.random() * 100)+1 
        setRandomNumber(newrandom);
    }
    return(
        <div>
            <h1>Question-4: RandomNumberGenerator</h1>
            <h2>randonNumber: {randonNumber}</h2>
            <button onClick={handleClick}>NewRandom</button>
        </div>
    );
}