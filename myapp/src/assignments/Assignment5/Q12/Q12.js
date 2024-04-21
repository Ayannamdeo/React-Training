// 12.Create a reusable Button component in React that accepts props for different styles (e.g., primary, secondary, danger) and click handlers. Demonstrate how to use this component in a sample application.import React from 'react';

import { Button } from './Button';


export function Q12(){
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Question 12:</h1>
      <Button onClick={handleClick} style="primary" />
      <Button onClick={handleClick} style="secondary" />
      <Button onClick={handleClick} style="danger" />
    </div>
  );
};

