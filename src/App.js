import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import About from "./About";
import Future from "./Future";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/future" element={<Future />}></Route>s
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
