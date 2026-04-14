function Navbar({ isProjectsPage = false }) {
  return (
    <nav className="nav">
      <a className="nav__brand" href="#top">
        ZS
      </a>
      <div className="nav__links">
        <a href="#top">Home</a>
        <a href="#skills">Skills</a>
        <a href={isProjectsPage ? "#/projects" : "#projects"}>Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
