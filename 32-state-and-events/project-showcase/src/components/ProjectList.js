import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
// TODO: replace this with a fetch request (eventually)
import projects from "../data/projects";

function ProjectList() {
  const [searchTerm, setSearchTerm] = useState("");

  // assembly line
  // [{}, {}, {}] => [{}]
  const filteredProjects = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log(filteredProjects);

  const projectItems = filteredProjects.map((project) => {
    return <ProjectItem key={project.id} project={project} />;
  });

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleChange} />

      <h3>
        Displaying {filteredProjects.length} of {projects.length} items
      </h3>
      {filteredProjects.length > 0 ? (
        <ul className="cards">{projectItems}</ul>
      ) : (
        <h4>No projects found!</h4>
      )}
    </section>
  );
}

export default ProjectList;
