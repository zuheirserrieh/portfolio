function HeroSection({ skills }) {
  const cvUrl = `${import.meta.env.BASE_URL}Zuheir%20Serrieh%20-%20Cv.pdf`;
  const photoUrl = `${import.meta.env.BASE_URL}WhatsApp Image 2026-01-29 at 9.27.01 AM.jpeg`;

  return (
    <header className="hero" id="top">
      <div className="hero__content">
        <p className="eyebrow">Portfolio | 2026</p>
        <h1>Zuheir Serrieh</h1>
        <p className="intro">
          I'm a Computer Science graduate with a strong interest in web development and software engineering. I have hands-on experience building responsive web applications using HTML, CSS, JavaScript, React, and Laravel. I enjoy turning ideas into functional, user-friendly solutions and continuously improving my technical skills through real projects and learning.
        </p>
        <div className="hero__links">
          <a className="cta-link" href={cvUrl} target="_blank" rel="noreferrer">
            Review CV
          </a>
          <div className="hero__contact">
            <a
              href="https://github.com/zuheirserrieh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zuheir-serrieh"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://wa.me/96171092179" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="skills-review" id="skills">
          <p className="eyebrow">Skills Review</p>
          <h2>Highlight your strengths</h2>
          <p className="skills-review__text">
            Add or reorder the skills you want recruiters to notice first.
          </p>
          <div className="chips">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="hero__photo">
        <img src={photoUrl} alt="Portrait of Zuheir Serrieh" />
      </div>
    </header>
  );
}

export default HeroSection;
