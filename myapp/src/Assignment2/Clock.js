import { useEffect, useState } from "react";

export function Clock(){
    const[time, setTime] = useState(new Date());


    useEffect(()=>{
        const intervalId = setInterval(()=> setTime(new Date()), 1000);
        console.log("mounted");
        //something ({["'`something`'"]})

        return () => {
            console.log("unmounted");
            clearInterval(intervalId);
        };
    }, [])


    return (
        <div>
            <p>{time.toTimeString()}</p>
        </div>
    )
}




