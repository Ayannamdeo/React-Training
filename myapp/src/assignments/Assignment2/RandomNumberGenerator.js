
// 4.Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.import { useState } from "react"
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