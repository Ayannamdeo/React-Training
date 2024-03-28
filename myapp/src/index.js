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
    <hr/>
    <br/>
    

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
    <hr/>
    <br/>  
    <Weather temperature={26}/>
    <Weather temperature={8}/>
    <hr/>
    <br/>

    <TaskList tasks={['task1', 'task2', 'task3', 'task4']}/>
    <hr/>
    <br/>

    <Counter />
    <hr/>
    <br/>

    <Button text='Submit' color="blue"/>
    <Button text='Cancel' color="red"/>
    <Button text='Save' color="Green"/>
    <hr/>
    <br/>


  </React.StrictMode>
);
