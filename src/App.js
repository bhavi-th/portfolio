import "./App.css"
import About from "./components/About.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;