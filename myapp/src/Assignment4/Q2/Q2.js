// Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.

import { useState } from "react";

export function Q2(){
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
    const [gender,setgender]=useState();

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(text,gender);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type something"
          name="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <input type="checkbox" onChange={(e) => setChecked(!checked)} />
        <span>{checked ? "Yes" : "No"}</span>
        <br />
        <input
          type="radio"
          value="Male"
          name="gender"
          onChange={(e) => {
            setgender(e.target.value);
          }}
        />{" "}
        Male
        <input
          type="radio"
          value="Female"
          name="gender"
          onChange={(e) => {
            setgender(e.target.value);
          }}
        />{" "}
        Female
        <input
          type="radio"
          value="Other"
          name="gender"
          onChange={(e) => {
            setgender(e.target.value);
          }}
        />{" "}
        Other
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}