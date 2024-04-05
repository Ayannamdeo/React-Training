import React from "react";
import ReactDOM from "react-dom/client";

import {
  Counter2,
  CounterWithStep,
  PersonForm,
  RandomNumberGenerator,
  ShowClock,
  ToDoList,
  Notification,
  Slideshow,
  ThemeSwitcher,
  LanguageSwitch,
  ShoppingCart,
  Vote,
  CounterWithUseCallback,
  TaskListUseCallback,
  StudentList,
  EmployeeSalary,
  Clipboard,
} from "./Assignment2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    {/* <Counter2 />
    <br />

    <PersonForm />
    <br />

    <ToDoList />
    <br />

    <RandomNumberGenerator />
    <br />

    <CounterWithStep />
    <br />
    <br />
    <ShowClock/>
    <br />
    <br />
    <Notification />
    <br />
    <Slideshow />
    <br />
    <ThemeSwitcher />
    <br />
    <LanguageSwitch /> */}
    <br />
    <ShoppingCart />
    <br />
    <Vote />
    <br />
    <CounterWithUseCallback />
    <br />
    <TaskListUseCallback />
    <br />
    <StudentList />
    <br />
    <EmployeeSalary />
    <br />
    <Clipboard />


  </React.StrictMode>
);
