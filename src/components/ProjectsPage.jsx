import { useMemo, useState } from "react";

function ProjectsPage({ projects, filters }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <main className="projects-page">
      <section className="section section--stacked" id="projects-page">
        <div className="section__heading section__heading--wide">
          <p className="eyebrow">Projects Archive</p>
          <h2>All Projects</h2>
          <p className="section-copy">
            Browse the full collection and filter by the stack you want to review.
          </p>
        </div>

        <div className="filter-bar" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={filter === activeFilter ? "filter-button is-active" : "filter-button"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <label className="filter-select" htmlFor="project-filter">
          <span>Project filter</span>
          <select
            id="project-filter"
            value={activeFilter}
            onChange={(event) => setActiveFilter(event.target.value)}
          >
            {filters.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </label>

        <div className="projects">
          {visibleProjects.map((project) => (
            <article key={project.title} className="project-card">
              <div>
                <h3>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
              </div>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
