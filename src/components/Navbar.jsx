import { cvUrl } from "./data";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ isProjectsPage = false }) {
  return (
    <nav className="nav" aria-label="Main">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label="Zuheir Serrieh, back to top">
          ZS<span className="nav__cursor" aria-hidden="true">_</span>
        </a>
        <div className="nav__links">
          {links.map((link) => (
            <a
              key={link.href}
              href={isProjectsPage && link.href === "#projects" ? "#/projects" : link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a className="button button--small" href={cvUrl} target="_blank" rel="noreferrer">
          CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
