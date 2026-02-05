import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { projects, skills } from "./components/data";

function App() {
  return (
    <div className="page">
      <Navbar />
      <HeroSection skills={skills} />
      <main>
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
