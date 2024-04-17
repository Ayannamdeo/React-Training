
import React from 'react';
import './Button.css'; // Import CSS file for styling

export function Button ({ onClick, style }){
  const buttonClass = `Button ${style || ''}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      Click Me
    </button>
  );
};

