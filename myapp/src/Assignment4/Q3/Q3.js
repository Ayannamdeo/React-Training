// Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed
import React, { useEffect, useState } from 'react';
import NewContent from './NewContent';


function Ques3() {
    const [name,setname]=useState("");
    const [status, setStatus] = useState(false);
    const handlechange=(e)=>{
      setname(e.target.value);
      
    }

   const clickhandler=()=>{
      if(name==="show" )
      {
        setStatus(true);
      }
      else{
        setStatus(false);
      }
    }

  return (
    <>
    <div>Ques3</div>
    <br />
    <input type="text" value={name} onChange={handlechange} placeholder='Enter the name '></input>
    <br></br>
    <br/>
    <button onClick={clickhandler}>Click</button>
    <br/>
    {status?<span><NewContent name={name}/></span>:""}

    
    </>


  )
}

export default Ques3