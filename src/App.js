import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
import Latest from "./components/Latest";
// import People from "./components/People";


export function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Latest />
      <Contact />
    </div>
  );
}

export function Team() {
  return (
    <div>
      <Navbar />
    </div>
  );
} 


