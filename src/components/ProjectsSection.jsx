import ProjectCard from "./ProjectCard";

function ProjectsSection({ projects }) {
  return (
    <section className="section container" id="projects">
      <div className="section__heading">
        <p className="eyebrow">Selected work</p>
        <h2>Shipped and in production</h2>
        <p className="section-copy">Real products for clients and teams, live in production.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <a className="text-link" href="#/projects">
        Browse all projects →
      </a>
    </section>
  );
}

export default ProjectsSection;
