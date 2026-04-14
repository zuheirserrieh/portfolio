function ProjectsSection({ projects }) {
  return (
    <section className="section" id="projects">
      <div className="section__heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
        <p className="section-copy">
          A quick preview of recent work. Open the full projects page to browse everything.
        </p>
      </div>
      <div className="projects">
        {projects.map((project) => (
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
        <a className="cta-link projects-section__link" href="#/projects">
          View All Projects
        </a>
      </div>
    </section>
  );
}

export default ProjectsSection;
