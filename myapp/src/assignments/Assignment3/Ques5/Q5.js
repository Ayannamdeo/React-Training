// 5.Extend the application to include nested routes for a more complex user interface.
// Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
// Implement nested routing within this section using nested routes.
// Add navigation links to switch between the sub-pages within the Dashboard section.
// Customize the content displayed on each sub-page.


import React, {  useState } from 'react';
import {BrowserRouter ,Route,Routes, Link, useNavigate} from 'react-router-dom'
import { Home } from "./Home";
import { About } from "./About";
import { Error } from "./Error";
import { LoginContext } from './LoginContext';
import { PrivateComponent } from './PrivateComponent';
import { Login } from './Login';
import { Profile } from './Profile';
import { Dashboard } from './Dashboard';
import { Settings } from './Settings';

function AppLayout(){
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate();

  function handleLogout(){
    setIsAuth(false);
    setUser({});
    navigate('/login');
  }
  return (
    <LoginContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {isAuth && <Link to='/dashboard'>Dashboard</Link>}
        <hr/>
        {isAuth && <span onClick={handleLogout}>Logout</span>}
      </nav>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </LoginContext.Provider>
  );
}
export function Q5(){
    return (
      <BrowserRouter>
      <AppLayout />
      </BrowserRouter>
    );
}