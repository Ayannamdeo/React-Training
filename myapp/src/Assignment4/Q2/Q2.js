// Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.

import React, { useState } from "react";
function Ques2() {
  
  const [name, setname] = useState();
  const [checked, setChecked] = useState(false); 
  const [gender,setgender]=useState();

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(name,gender);
  }

  return (
    <>
    <div>Ques2</div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => {
            setname(e.target.value)
          }}
          value={name}
          placeholder="Enter the name"
        ></input>

        <br />
        <input type = "checkbox" onChange = {(e)=>{setChecked(e.target.checked)}} />
        <span>{checked?"Yes":"No"}</span>
        <br />
        <input type="radio" value="Male" name="gender" onChange={(e)=>{setgender(e.target.value)}}  /> Male
        <input type="radio" value="Female" name="gender" onChange={(e)=>{setgender(e.target.value)}}  /> Female
        <input type="radio" value="Other" name="gender" onChange={(e)=>{setgender(e.target.value)}} /> Other
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Ques2;