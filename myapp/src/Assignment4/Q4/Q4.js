// 4.Build a registration form with two password fields. Implement controlled components for both password inputs. Add a validation rule to ensure that the two passwords match before allowing the form submission.

import React, { useState } from "react";

function Ques4() {
  const [name, setname] = useState("");
  const [pass1,setpass1]=useState("");
  const [pass2,setpass2]=useState("");
  const [status,setstatus]=useState(true);
  const submitHandler=(e)=>{
    e.preventDefault()
    if(pass1===pass2)
    {
        setstatus(true);
    }
    else{
        setstatus(false);
    }
  }
  return (
    <div>
      <div>Ques4</div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Enter the name "
        ></input>
        <br />
        <br />
        <input type="password" value={pass1} placeholder="Enter the password" onChange={(e)=>{setpass1(e.target.value)}}></input>
        <br />
        <br />
        <input type="password" value={pass2} placeholder="Re enter the password" onChange={(e)=>{setpass2(e.target.value)}}></input>
        <br/>
        <br />
        {!status?<span>"Password Do not matched</span>:""}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Ques4;