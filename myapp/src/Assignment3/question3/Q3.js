// 3.creat pages: Home and About.
// Implement routing using React Router DOM.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.




import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Error from './Error';


function Ques3() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Ques3