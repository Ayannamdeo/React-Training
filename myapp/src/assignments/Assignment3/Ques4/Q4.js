// .Enhance the previous application by adding protected routes that require authentication.
// Create a login page with a form that accepts a username and password.
// Implement authentication logic (e.g., hardcode a username and password for now).
// Secure the About page so that it can only be accessed by authenticated users.
// Redirect unauthenticated users to the login page.
// Display a message on the Home page welcoming the authenticated user.

import React, {  useState } from 'react';
import {BrowserRouter ,Route,Routes, Link, useNavigate} from 'react-router-dom'
import { Home } from "./Home";
import { About } from "./About";
import { Error } from "./Error";
import { LoginContext } from './LoginContext';
import { PrivateComponent } from './PrivateComponent';
import { Login } from './Login';

function AppLayout(){
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate();

  function handleLogout(){
    setIsAuth(false);
    setUser({});
    navigate('/Login');
  }
  return (
    <LoginContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {isAuth && <span onClick={handleLogout}>Logout</span>}
        </nav>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </LoginContext.Provider>
  );
}
export function Q4(){
    return (
      <BrowserRouter>
      <AppLayout />
      </BrowserRouter>
    );
}