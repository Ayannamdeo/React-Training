// 1.Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.

import React, { useState } from 'react';

function Ques1() {
  const [value, setValue] = useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
        <div>Ques1</div>
        <br />
      <span>Enter text:</span>
      <input
        type="text"
        id="input"
        value={value}
        onChange={handleChange}
      />
      <p>Input value: {value}</p>
    </div>
  );
}

export default Ques1;