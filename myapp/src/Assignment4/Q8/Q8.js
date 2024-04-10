// Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.

import React, { useState } from 'react';

export function Q8() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    setFahrenheit(value !== '' ? (parseFloat(value) * 9 / 5 + 32).toFixed(2) : '');
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    setCelsius(value !== '' ? ((parseFloat(value) - 32) * 5 / 9).toFixed(2) : '');
  };

  return (
    <div>
      <div>Ques8</div>
      <h2>Temperature Converter</h2>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter temperature in Celsius"
        />
      </label>
      <br />
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter temperature in Fahrenheit"
        />
      </label>
    </div>
  );
}

