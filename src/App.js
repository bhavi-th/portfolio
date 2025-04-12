import "./App.css"
import About from "./components/About.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import ScrollTracker from "./components/ScrollTracker.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";

function App() {

  return (
    <div className="App">
      <Navbar />
      <ScrollTracker />
      <Home />
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