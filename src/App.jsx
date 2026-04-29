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
  const [showCvNotice, setShowCvNotice] = useState(false);
  const cvUrl = `${import.meta.env.BASE_URL}Zuheir%20Serrieh%20-%20Cv.pdf`;

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getCurrentPage());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (currentPage !== "home") {
      setShowCvNotice(false);
      return undefined;
    }

    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShowCvNotice(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  const isProjectsPage = currentPage === "projects";

  return (
    <div className="page">
      {showCvNotice ? (
        <aside className="cv-notice" aria-label="Download CV notice">
          <div>
            <p className="cv-notice__eyebrow">Quick Download</p>
            <p className="cv-notice__text">Download the latest CV directly from here.</p>
          </div>
          <div className="cv-notice__actions">
            <a
              className="cv-notice__button"
              href={cvUrl}
              download="Zuheir Serrieh - Cv.pdf"
            >
              Download CV
            </a>
            <button
              type="button"
              className="cv-notice__close"
              onClick={() => setShowCvNotice(false)}
              aria-label="Close CV notice"
            >
              Close
            </button>
          </div>
        </aside>
      ) : null}
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
