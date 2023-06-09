import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Home from "./components/home";
import Skills from "./components/skills";
import Experience from "./components/experience";
import WorkExp from "./components/workexp";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <WorkExp />
    </div>
  );
}

export default App;
