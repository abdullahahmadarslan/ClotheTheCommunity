import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home";
import About from "./About";
import Donate from "./Donate";
import Footer from './Footer';
import Contact from "./Contact"

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='donate' element={<Donate />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
      <Footer />


    </>

  )
}

export default App;