import React from "react";
import './App.css';
import Header from "./header/Header";
import AboutMe from "./about-me/AboutMe";
import Skills from "./skills/Skills";

function App() {
  return (
    <div className='App'>
      <Header/>
      <AboutMe/>
      <Skills/>
    </div>
  );
}

export default App;
