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
      <NavLink to='/'>About</NavLink>
      <NavLink to='/Contact'>Contact</NavLink>
      <NavLink to='/Job'>Job</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Job' element={<Job />} />
        <Route path='/Contact' element={<Contact />} />
     </Routes>
    </div>
  );
}
export default App;