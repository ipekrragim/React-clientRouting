import React, { useState } from "react";
import "./App.css";
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import About from "./Components/About"
import Contact from "./Components/Contact"
import Job from "./Components/Job"
function App(){
  return(
    <div className="App">
      <div className='menu'>
 <NavLink to='/about'>About</NavLink>
<NavLink to='/contact'>Contact</NavLink>
<NavLink to='/job'>Job</NavLink>
      </div>
      <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/job' element={<Job />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
    </div>
  );
}
export default App;