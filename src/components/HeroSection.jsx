import { cvUrl, heroFacts, profile } from "./data";

function HeroSection() {
  const photoUrl = `${import.meta.env.BASE_URL}me.jpeg`;

  return (
    <header className="hero container" id="top">
      <div className="hero__content">
        <p className="status">
          <span className="status__dot" aria-hidden="true" />
          Open to full-time roles
        </p>
        <h1>{profile.name}</h1>
        <p className="hero__headline">
          I build and ship production web apps with <strong>TypeScript</strong>,{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and <strong>Node.js</strong>.
        </p>
        <p className="intro">
          From fast, SEO-friendly frontends to secure REST APIs, authentication, and PostgreSQL data
          models. Right now I&apos;m building an AI-powered coaching platform at Tawasoul and
          delivering client websites as a freelancer.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            See my work
          </a>
          <a className="button button--ghost" href={cvUrl} target="_blank" rel="noreferrer">
            View CV
          </a>
        </div>
        <ul className="hero__links" aria-label="Profiles">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
          </li>
        </ul>
      </div>

      <div className="hero__photo">
        <img src={photoUrl} alt="Portrait of Zuheir Serrieh" width="360" height="360" />
      </div>

      <dl className="facts">
        {heroFacts.map((fact) => (
          <div key={fact.value} className="fact">
            <dt>{fact.value}</dt>
            <dd>{fact.label}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

export default HeroSection;
