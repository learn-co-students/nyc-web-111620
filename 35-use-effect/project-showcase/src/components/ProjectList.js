import React, { useState } from "react";
import Filter from "./Filter";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [phase, setPhase] = useState("All");

  const projectItems = projects
    .filter((project) => phase === "All" || project.phase === phase)
    .filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((project) => <ProjectItem key={project.id} project={project} />);

  return (
    <section>
      <h2>Projects</h2>

      <Filter
        phase={phase}
        setPhase={setPhase}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

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
