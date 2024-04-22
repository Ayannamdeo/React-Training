// 1.Create a React application that has multiple pages represented as components. Implement lazy loading for these components using React's lazy and Suspense features. When a user navigates to a particular page, the component should be loaded lazily, improving the application's initial loading time

// 2.Extend Question 1 to include error handling. If a lazy-loaded component fails to load, display a user-friendly error message to the user instead of crashing the application. Implement this using the ErrorBoundary component.

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import { Error } from "./Error";
// import { ErrorBoundary } from "react-error-boundary";

const Setting = React.lazy(() => import("./Settings"));
const About = React.lazy(() => import("./About"));

export function Q1_Q2() {
  return (
    <>
      <div>Question 1 and 2:</div>
      <BrowserRouter>
        <Suspense fallback={<div>Please wait while Loading...</div>}>
          {/* <ErrorBoundary FallbackComponent={<div>Some Error occurred</div>}> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/about" element={<About />} />
            </Routes>
          {/* </ErrorBoundary> */}
        </Suspense>
      </BrowserRouter>
    </>
  );
}
