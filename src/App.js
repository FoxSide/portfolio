import React from "react";
import './App.css';
import Header from "./header/Header";
import AboutMe from "./about-me/AboutMe";
import Skills from "./skills/Skills";
import MyProjects from "./my-projects/MyProjects";
import FindWork from "./find-work/FindWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className='App'>
      <Header/>
      <AboutMe/>
      <Skills/>
      <MyProjects/>
      {/*<FindWork/>*/}
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
