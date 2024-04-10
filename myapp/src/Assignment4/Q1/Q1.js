// 1.Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.

import React, { useState } from 'react';

export function Q1(){
  const [state, setState] = useState("");

  return (
    <div>
      <h1>Q1: controlled input.</h1>
      <input placeholder='type something' type='text' value={state} name='input' onChange={e=> setState(e.target.value)}/>
      <p>Input is: {state} </p>
    </div>
  );
}