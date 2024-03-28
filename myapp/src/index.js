import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    App,
    Button,
    Counter,
    
    TaskList,
    UserCard,
    Weather}  from './Assignment1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    <UserCard 
        name="person1"
        email="person1@gmail.com"
        url = "https://i.imgur.com/1bX5QH6.jpg"
              />
    <UserCard 
        name="person2"
        email="person2@gmail.com"
        url = "https://i.imgur.com/OKS67lh.jpg"
              />

    <Weather temperature={26}/>
    <Weather temperature={8}/>

    <TaskList tasks={['task1', 'task2', 'task3', 'task4']}/>

    <Counter />

    <Button text='Submit' color="blue"/>
    <Button text='Cancel' color="red"/>
    <Button text='Save' color="Green"/>


  </React.StrictMode>
);
