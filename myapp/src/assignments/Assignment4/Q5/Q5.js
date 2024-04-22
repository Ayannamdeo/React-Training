// 5.Construct a select dropdown menu with multiple options. Control the selected option using state. When an option is selected, display a message showing the selected value.

import { useState } from "react";

export function Q5(){
  const [option, setOption] = useState('');

  return(
    <div>
      <h1>Q5: select dropdown option</h1>
      <h2>Select from dropdown - </h2>
      <select value={option} onChange={e=>setOption(e.target.value)}>
        <option value=''>Select an option</option>
        <option value='option 1'>option 1</option>
        <option value='option 2'>option 2</option>
        <option value='option 3'>option 3</option>
      </select>
      {option && <p>Selected option is: {option}</p>}
    </div>
  );
}