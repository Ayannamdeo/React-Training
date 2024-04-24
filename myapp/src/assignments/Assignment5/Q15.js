// 15.Build an HOC called withLogger that logs the events of a component (e.g., mounting, unmounting, updating). Apply this HOC to a component and display the logs in the browser console.

import React, { useEffect } from 'react';

// HOC for logging component events
const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      // Component mounted
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} mounted`);

      return () => {
        // Component will unmount
        console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} unmounted`);
      };
    }, []);

    useEffect(() => {
      // Component updated
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} updated`);
    });

    // Render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

// Sample component
const MyComponent = () => {
  return <div>Hello, World!</div>;
};

// Apply the withLogger HOC to MyComponent
const MyComponentWithLogger = withLogger(MyComponent);

// Render the component with the logger
export function Q15(){
  return (
    <div>
      <h1>Question-15: Component with Logger</h1>
      <MyComponentWithLogger />
    </div>
  );
};

