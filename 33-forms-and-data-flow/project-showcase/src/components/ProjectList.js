import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
// TODO: replace this with a fetch request (eventually)
import projects from "../data/projects";

function ProjectList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [phase, setPhase] = useState("All");

  // assembly line
  // projects: [{}, {}, {}]
  // filter: [{}, {}, {}] => [{}, {}]
  // map: [{}, {}] => [<ProjectItem />, <ProjectItem />]
  const projectItems = projects
    // filter by phase
    .filter((project) => phase === "All" || project.phase === phase)
    // filter by name
    .filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    // map into components
    .map((project) => <ProjectItem key={project.id} project={project} />);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button
          className={phase === "All" ? "active" : null}
          onClick={() => setPhase("All")}
        >
          All
        </button>
        <button
          className={phase === 5 ? "active" : null}
          onClick={() => setPhase(5)}
        >
          Phase 5
        </button>
        <button
          className={phase === 4 ? "active" : null}
          onClick={() => setPhase(4)}
        >
          Phase 4
        </button>
        <button
          className={phase === 3 ? "active" : null}
          onClick={() => setPhase(3)}
        >
          Phase 3
        </button>
        <button
          className={phase === 2 ? "active" : null}
          onClick={() => setPhase(2)}
        >
          Phase 2
        </button>
        <button
          className={phase === 1 ? "active" : null}
          onClick={() => setPhase(1)}
        >
          Phase 1
        </button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleChange} />

      <h3>
        Displaying {projectItems.length} of {projects.length} items
      </h3>
      {projectItems.length > 0 ? (
        <ul className="cards">{projectItems}</ul>
      ) : (
        <h4>No projects found!</h4>
      )}
    </section>
  );
}

export default ProjectList;
