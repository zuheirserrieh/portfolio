import { education, experience } from "./data";

function ExperienceSection() {
  return (
    <section className="section container" id="experience">
      <div className="section__heading">
        <p className="eyebrow">Experience</p>
        <h2>Where I&apos;ve worked</h2>
      </div>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="timeline__item">
            <p className="timeline__date">{job.period}</p>
            <div>
              <h3>
                {job.role} <span className="timeline__company">· {job.company}</span>
              </h3>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li className="timeline__item">
          <p className="timeline__date">{education.period}</p>
          <div>
            <h3>
              {education.degree} <span className="timeline__company">· {education.school}</span>
            </h3>
          </div>
        </li>
      </ol>
    </section>
  );
}

export default ExperienceSection;
