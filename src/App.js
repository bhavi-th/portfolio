import { useState } from 'react';
import "./App.css"
import About from "./components/About.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import ScrollTracker from "./components/ScrollTracker.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";

function App() {

  const [themeInverted, setThemeInverted] = useState(false);

  return (
    <div className="App">
      <Navbar setTheme={setThemeInverted} />
      <ScrollTracker />
      <Home themeInverted={themeInverted} />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <Skills />
      <hr />
      <Contact />
    </div>
  );
}

export default App;