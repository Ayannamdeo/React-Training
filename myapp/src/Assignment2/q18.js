// 18.Design a custom hook named useLocalStorage to interact with local storage.
// Create a useLocalStorage hook that allows storing and retrieving data from local storage.
// Implement methods for setting, getting, and removing data using the hook.
// Utilize the localStorage API within the hook to manage data.
// Develop a component that uses the useLocalStorage hook to manage user preferences.


import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

function Ques18() {
  const {getter,setting,getting,removing}=useLocalStorage();
  const [key,setKey]=useState("");
  const [data,setData]=useState("");
  return (
    <>
    <div>Ques18</div>
    <br />
    <input type="text" value={key} onChange={(e)=>{setKey(e.target.value)}} placeholder='enter the key'></input>
    <br />
    <br />
    <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}} placeholder='enter the data '></input>
    <br />
    <br />
    <button onClick={()=>setting(key,data)}>Set Data</button>
    <br />
    <br />
    <button onClick={()=>getting(key)}>Get Data</button>
    <span>{getter?JSON.stringify(getter):""}</span>
    <br />
    <br />
    <button onClick={()=>removing(key)}>Remove Data</button>



    </>
  )
}

export default Ques18


function useLocalStorage() {
    const [getter,setGetter]=useState();

    function setting(key,data)
    {
        if (!key || !data) return;
        localStorage.setItem(key,JSON.stringify(data))
    }

    function getting(key)
    {
        if (!key) return;
       let storedData=localStorage.getItem(key);
       if(storedData)
       {
        setGetter(JSON.parse(storedData));
       }
       else{
        setGetter("Data not found")
       }
    }
    function removing(key)
    {   if (!key) return;
        localStorage.removeItem(key);
    }
  return {getter,setting,getting,removing};
  
}

export default useLocalStorage