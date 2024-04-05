// 19.Build a custom hook named useTimer for creating countdown timers.
// Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals.
// Return the current timer value and methods to start, pause, and reset the timer.
// Develop a component that utilizes the useTimer hook to display and control a countdown.



import React from 'react';
import useTimer from './useTimer';

function Ques19() { 
    const {timer,start,pause,reset} =useTimer(1000);
  return (
    <>
    <div>Ques19</div>
    <h1>{timer}</h1>
    <br />
    <br />
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
    
    
    
    
    </>
  )
}

export default Ques19

import  { useEffect, useState } from 'react'

function useTimer(time) {
    const [timer,setTimer]=useState(0);
    const [run,setRun]=useState(false);
    

  
    useEffect(()=>{
        let interval;
        if(run)
        {
          interval=  setInterval(()=>{
                setTimer(timer+1);
            },time)
        }
    
        return ()=>{
            clearInterval(interval);
        }
    },[timer,time,run]);

    function start()
    {
        setRun(true);
    }

    function pause()
    {
        setRun(false);
    }

    function reset()
    {
        setTimer(0);
        
    }
  return {timer,start,pause,reset};
}

export default useTimer