import { skillGroups } from "./data";

function SkillsSection() {
  return (
    <section className="section container" id="skills">
      <div className="section__heading">
        <p className="eyebrow">Skills</p>
        <h2>What I work with</h2>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
