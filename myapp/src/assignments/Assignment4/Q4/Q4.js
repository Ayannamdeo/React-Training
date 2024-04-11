// 4.Build a registration form with two password fields. Implement controlled components for both password inputs. Add a validation rule to ensure that the two passwords match before allowing the form submission.

import React, { useState } from "react";

export function Q4() {
  const [name, setname] = useState("");
  const [pass1,setpass1]=useState("");
  const [pass2,setpass2]=useState("");
  const [status,setstatus]=useState(false);
  const submitHandler=(e)=>{
    e.preventDefault()
    if(pass1===pass2)
    {
        setstatus(true);
    }
    else{
      alert("Passwords doesn't match")
        setstatus(false);
    }
  }
  return (
    <div>
      <div>Q4: passwords</div>
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
        {status ? <span>"Password Matched"</span> : ""}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}
