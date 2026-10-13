function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        {project.kind ? <span className="badge">{project.kind}</span> : null}
        {project.live ? (
          <span className="live">
            <span className="status__dot" aria-hidden="true" />
            Live
          </span>
        ) : null}
      </div>

      <h3>{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      {project.role ? (
        <p className="project-card__role">
          <strong>My part:</strong> {project.role}
        </p>
      ) : null}

      {project.highlights?.length ? (
        <ul className="project-card__highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      <ul className="tags" aria-label="Tech stack">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="project-card__links">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live site`}
          >
            Live site ↗
          </a>
        ) : null}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source code`}
          >
            Code ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
