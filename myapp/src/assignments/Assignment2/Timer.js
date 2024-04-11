// 19.Build a custom hook named useTimer for creating countdown timers.
// Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals.
// Return the current timer value and methods to start, pause, and reset the timer.
// Develop a component that utilizes the useTimer hook to display and control a countdown.
import { useEffect, useState } from "react";

export function Timer(){
    const [timer, start, pause, reset] = useTimer(60);

    return (
        <div>
            <h1>Question-19: useTimer custom hook</h1>
            <p>Timer Count: {timer}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>pause</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}


function useTimer(initialtime){
    const [timer, setTimer] = useState(initialtime);
    const [isrunning, setIsrunning] = useState(false);

    useEffect(()=> {
        let timerId;
        if(isrunning){
        timerId = setInterval(()=> setTimer(prev=>prev-1), 500);
        }
        return ()=> clearInterval(timerId);
    }, [timer, isrunning]);

    function start(){
        setIsrunning(true);
    }
    function pause(){
        setIsrunning(false);
    }
    function reset(){
        setIsrunning(false);
        setTimer(initialtime);
    }
    
    return [timer, start, pause, reset];

}