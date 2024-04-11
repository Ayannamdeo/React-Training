import { useState } from "react"
import { Clock } from "./Clock"

export function ShowClock(){
    const [showcomponent, setShowcomponent] = useState(true);
    function toggleShow(){
        setShowcomponent(!showcomponent);
    }
    return (
      <div>
        <h1>Question-6: Clock</h1>
        <button onClick={toggleShow}>
          {showcomponent ? "hidecomponent" : "showcomponent"}
        </button>
        {showcomponent && <Clock />}
      </div>
    );
}