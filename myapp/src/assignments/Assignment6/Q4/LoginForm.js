// You are given a simple form component (LoginForm) that contains input fields for username and password, as well as a submit button. Create test cases to verify that the form fields can be filled, and the submit button works correctly.
import React, { useState } from 'react';

export function LoginForm(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="username">
        Username:
        <input id="username" type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input id="password" type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
