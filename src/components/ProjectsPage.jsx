import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectsPage({ projects, filters }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter, projects]);

  const countFor = (filter) =>
    filter === "All"
      ? projects.length
      : projects.filter((project) => project.filters.includes(filter)).length;

  return (
    <main className="projects-page container">
      <section className="section section--first" id="projects-page">
        <a className="text-link" href="#top">
          ← Back to home
        </a>
        <div className="section__heading">
          <p className="eyebrow">Projects archive</p>
          <h2>All projects</h2>
          <p className="section-copy">
            Client work, team work, and personal builds. Filter by the stack you&apos;re hiring for.
          </p>
        </div>

        <div className="filter-bar" role="group" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={filter === activeFilter}
              className={filter === activeFilter ? "filter-button is-active" : "filter-button"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter} <span className="filter-button__count">{countFor(filter)}</span>
            </button>
          ))}
        </div>

        <label className="filter-select" htmlFor="project-filter">
          <span>Filter by stack</span>
          <select
            id="project-filter"
            value={activeFilter}
            onChange={(event) => setActiveFilter(event.target.value)}
          >
            {filters.map((filter) => (
              <option key={filter} value={filter}>
                {filter} ({countFor(filter)})
              </option>
            ))}
          </select>
        </label>

        <div className="project-grid project-grid--two">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
