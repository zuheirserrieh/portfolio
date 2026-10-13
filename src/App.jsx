import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsPage from "./components/ProjectsPage";
import ContactSection from "./components/ContactSection";
import { allProjects, cvUrl, featuredProjects, profile, projectFilters } from "./components/data";

const NOTICE_KEY = "cv-notice-dismissed";

function getCurrentPage() {
  return window.location.hash === "#/projects" ? "projects" : "home";
}

function readDismissed() {
  try {
    return window.sessionStorage.getItem(NOTICE_KEY) === "1";
  } catch {
    return false;
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);
  const [showCvNotice, setShowCvNotice] = useState(false);

  const dismissCvNotice = () => {
    setShowCvNotice(false);
    try {
      window.sessionStorage.setItem(NOTICE_KEY, "1");
    } catch {
      // Storage can be blocked; the notice just may reappear.
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getCurrentPage();
      setCurrentPage(nextPage);

      if (nextPage !== "home") {
        setShowCvNotice(false);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // When switching pages, land on the requested section (or the top).
  useEffect(() => {
    const hash = window.location.hash;
    const target = hash && !hash.startsWith("#/") ? document.querySelector(hash) : null;

    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage !== "home" || readDismissed()) {
      return undefined;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
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
        <aside className="cv-notice" aria-label="Download CV">
          <p className="cv-notice__text">
            <span className="cv-notice__eyebrow">CV</span>
            Want the one-page version?
          </p>
          <div className="cv-notice__actions">
            <a
              className="button button--primary button--small"
              href={cvUrl}
              download="Zuheir Serrieh - CV.pdf"
              onClick={dismissCvNotice}
            >
              Download
            </a>
            <button
              type="button"
              className="cv-notice__close"
              onClick={dismissCvNotice}
              aria-label="Close CV notice"
            >
              ×
            </button>
          </div>
        </aside>
      ) : null}

      <Navbar isProjectsPage={isProjectsPage} />

      {isProjectsPage ? (
        <div id="main">
          <ProjectsPage projects={allProjects} filters={projectFilters} />
        </div>
      ) : (
        <>
          <HeroSection />
          <main id="main">
            <ProjectsSection projects={featuredProjects} />
            <ExperienceSection />
            <SkillsSection />
            <ContactSection />
          </main>
        </>
      )}

      <footer className="footer container">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React and Vite</p>
      </footer>
    </div>
  );
}

export default App;
