import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsPage from "./components/ProjectsPage";
import ContactSection from "./components/ContactSection";
import { allProjects, featuredProjects, projectFilters, skills } from "./components/data";

function getCurrentPage() {
  return window.location.hash === "#/projects" ? "projects" : "home";
}

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getCurrentPage());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isProjectsPage = currentPage === "projects";

  return (
    <div className="page">
      <Navbar isProjectsPage={isProjectsPage} />
      {isProjectsPage ? (
        <ProjectsPage projects={allProjects} filters={projectFilters} />
      ) : (
        <>
          <HeroSection skills={skills} />
          <main>
            <ProjectsSection projects={featuredProjects} />
            <ContactSection />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
