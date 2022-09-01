import "./App.css";
import { About } from "./components/About/About";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Project } from "./components/Project/Project";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Education />
      <Experience />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
