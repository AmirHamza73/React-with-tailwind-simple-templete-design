'use statics'
import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
