// .Enhance the previous application by adding protected routes that require authentication.
// Create a login page with a form that accepts a username and password.
// Implement authentication logic (e.g., hardcode a username and password for now).
// Secure the About page so that it can only be accessed by authenticated users.
// Redirect unauthenticated users to the login page.
// Display a message on the Home page welcoming the authenticated user.

import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Error from './Error';
import Login from './Login';

import {Mycontext} from './CreateContext';
import PrivateComponent from './PrivateComponent';

function Ques4() {

    const [auth,setauth]=useState(false);
    const [name,setName]=useState('');

  return (
    <>
    <Mycontext.Provider value={{auth,setauth,name,setName}}>
    <BrowserRouter>
    <Routes>
      <Route element={<PrivateComponent />}>
        <Route path='/about' element={<About />}></Route>
      </Route>
        <Route path='/' element={<Home  />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='*' element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
    </Mycontext.Provider>
    
    </>
    
  )
}

export default Ques4