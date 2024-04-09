// 3.creat pages: Home and About.
// Implement routing using React Router DOM.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Error } from "./Error";

export function Q3(){
    return (
        
    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link>
        <Link to= "/About">About</Link>
    </nav>
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route  path="*" element= {<Error />}/>
        </Routes>
    </BrowserRouter>
    );
}