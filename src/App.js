import "./App.css"
import About from "./components/About.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import ScrollTracker from "./components/ScrollTracker.js";

function App() {

  return (
    <div className="App">
      <Navbar />
      <ScrollTracker />
      <Home />
      <About />
    </div>
  );
}

export default App;