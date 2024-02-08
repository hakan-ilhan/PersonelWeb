import Hero from "./components/Hero";
import React, { useContext, useEffect, useState } from "react";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import "./App.css";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Context } from "./contexts/Context";

// https://reqres.in/api/workintech
function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
